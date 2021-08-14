import * as S from "../../pagestyle/allStyles";
import { GenreArr } from "./../../src/utils/export";
import { useEffect, useState } from "react";
import pbook from "../../src/api/pbook";
import BookCard from "../../src/components/bookCard";
import PageArrowIcon from "../../src/assets/pageArrow";
import { useRouter } from "next/router";
import { COLOR } from "./../../styles/index";

export default function AllPage() {
  const router = useRouter();
  const query = router.query;
  const genreArr = GenreArr.slice();
  const sortArr = ["전체", "최신순", "과거순", "평점순", "조회순"];

  genreArr.unshift("전체");
  const [genre, setGenre] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [lastPage, setLastPage] = useState<number>();
  const perPage = 10;
  const routing = (page, genre, sort): void => {
    router.push(`all?page=${page}&genre=${genre}&sort=${sort}`);
  };
  const getGenreValue = ({ target }): void => {
    setGenre(target.value);
    routing(1, target.value, sort);
  };
  const getSortValue = ({ target }): void => {
    setSort(target.value);
    routing(1, genre, target.value);
  };
  const changePage = (event): any => {
    routing(event.target.innerHTML, genre, sort);
  };
  useEffect(() => {
    if (query.page != undefined) {
      setPage(query.page.toString());
      setGenre(query.genre.toString());
      setSort(query.sort.toString());
    }
  }, [router]);
  useEffect(() => {
    genre &&
      sort &&
      pbook.getAllPBook(page, genre, sort).then((res) => {
        const last = res.data.last;
        setLastPage(last);
        const pageContainer = document.getElementById("pageContainer");
        while (pageContainer.firstChild) {
          pageContainer.removeChild(pageContainer.firstChild);
        }
        const first =
          Math.floor((parseInt(page.toString()) - 1) / perPage) * perPage + 1;
        const max = last >= first + perPage ? first + perPage - 1 : last;
        for (let i = first; i <= max; i++) {
          const span = document.createElement("span");
          span.innerHTML = i.toString();
          span.innerHTML === page ? (span.style.color = COLOR.main) : {};
          span.onclick = changePage;
          pageContainer.insertBefore(span, null);
        }
        setData(res.data.data);
      });
  }, [genre, sort, page]);
  const checkNextPage = (): boolean => {
    return (
      lastPage >=
      Math.floor((parseInt(page.toString()) - 1) / perPage) * perPage + perPage
    );
  };
  const nextPage = (): void => {
    routing(
      Math.floor((parseInt(page.toString()) - 1) / perPage) * perPage +
        perPage +
        1,
      genre,
      sort
    );
  };
  const beforePage = (): void => {
    routing(
      Math.floor((parseInt(page.toString()) - 1) / perPage) * perPage,
      genre,
      sort
    );
  };
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <>
            <S.Menu>
              {genreArr.map((contents, index) => (
                <S.GenreLabel check={contents === genre} key={index}>
                  {genre === contents ? (
                    <input
                      name="genre"
                      type="radio"
                      value={contents}
                      onClick={getGenreValue}
                      defaultChecked
                    />
                  ) : (
                    <input
                      onClick={getGenreValue}
                      name="genre"
                      type="radio"
                      value={contents}
                    />
                  )}
                  {contents}
                </S.GenreLabel>
              ))}
            </S.Menu>
          </>
          <>
            <S.Menu style={{ marginTop: "30px" }}>
              {sortArr.map((contents, index) => (
                <S.SortLabel key={index} check={contents === sort}>
                  {sort === contents ? (
                    <input
                      type="radio"
                      name="sort"
                      value={contents}
                      onClick={getSortValue}
                      defaultChecked
                    />
                  ) : (
                    <input
                      type="radio"
                      name="sort"
                      value={contents}
                      onClick={getSortValue}
                    />
                  )}
                  <div /> {contents}
                </S.SortLabel>
              ))}
            </S.Menu>
          </>
        </>
        <>
          <S.CardList>
            {data.map((obj, index) => (
              <BookCard
                key={index}
                title={obj.title}
                src={obj.coverImg}
                see={obj.views}
                rate={obj.rate}
                name={obj.writerName}
                genre={obj.genre}
                id={obj["_id"]}
              />
            ))}
          </S.CardList>
        </>
        <>
          <S.PageWrapper>
            {parseInt(page) > perPage && (
              <PageArrowIcon callback={beforePage} deg="0" />
            )}
            <div id="pageContainer" />
            {checkNextPage() && <PageArrowIcon callback={nextPage} deg="180" />}
          </S.PageWrapper>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
