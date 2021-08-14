import * as S from "../../pagestyle/allStyles";
import { GenreArr } from "./../../src/utils/export";
import { useEffect, useState } from "react";
import pbook from "../../src/api/pbook";
import BookCard from "../../src/components/bookCard";
import PageArrowIcon from "../../src/assets/pageArrow";
import { useRouter } from "next/router";

export default function AllPage() {
  const router = useRouter();
  const query = router.query;
  const genreArr = GenreArr.slice();
  const sortArr = ["전체", "최신순", "과거순", "평점순", "조회순"];

  genreArr.unshift("전체");
  const [genre, setGenre] = useState<string[] | string>("");
  const [sort, setSort] = useState<string[] | string>("");
  const [pageArr, setpageArr] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const perPage = 5;
  const getGenreValue = ({ target }): void => {
    setGenre(target.value);
  };
  const getSortValue = ({ target }): void => {
    setSort(target.value);
  };
  useEffect(() => {
    setGenre(query.genre);
    setSort(query.sort);
  }, [router]);
  useEffect(() => {
    genre &&
      sort &&
      pbook.getAllPBook(page, genre, sort).then((res) => {
        setData(res.data.data);
      });
  }, [genre, sort, router]);
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
            <PageArrowIcon callback={() => {}} deg="0" />
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <PageArrowIcon callback={() => {}} deg="180" />
          </S.PageWrapper>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
