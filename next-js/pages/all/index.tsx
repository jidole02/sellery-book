import * as S from "../../pagestyle/allStyles";
import { GenreArr } from "./../../src/utils/export";
import { useEffect, useState } from "react";
import pbook from "../../src/api/pbook";
import BookCard from "../../src/components/bookCard";

export default function AllPage() {
  const genreArr = GenreArr.slice();
  const sortArr = ["전체", "최신순", "과거순", "평점순", "조회순"];
  genreArr.unshift("전체");
  const [genre, setGenre] = useState<string>(genreArr[0]);
  const [sort, setSort] = useState<string>(sortArr[0]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const getGenreValue = ({ target }): void => {
    setGenre(target.value);
  };
  const getSortValue = ({ target }): void => {
    setSort(target.value);
  };
  useEffect(() => {
    pbook.getAllPBook(page, genre, sort).then((res) => {
      setLastPage(res.data.last);
      setData(res.data.data);
    });
  }, [genre, sort]);
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
      </S.Container>
    </S.Wrapper>
  );
}
