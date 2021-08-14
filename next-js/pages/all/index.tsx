import * as S from "../../pagestyle/allStyles";
import { GenreArr } from "./../../src/utils/export";
import { useState } from "react";
import CardList from "../../src/components/cardList";

export default function AllPage() {
  const genreArr = GenreArr.slice();
  const sortArr = ["전체", "최신순", "좋아요순", "평점순", "조회순"];
  genreArr.unshift("전체");
  const [genre, setGenre] = useState<string>(genreArr[0]);
  const [sort, setSort] = useState<string>(sortArr[0]);
  const getGenreValue = ({ target }): void => {
    setGenre(target.value);
  };
  const getSortValue = ({ target }): void => {
    setSort(target.value);
  };
  return (
    <S.Wrapper>
      <S.Container>
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
        <S.Menu>
          {sortArr.map((contents, index) => (
            <S.SortLabel key={index} check={contents === sort}>
              {sort === contents ? (
                <input
                  type="radio"
                  name="sort"
                  value={contents}
                  onClick={getSortValue}
                  checked
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
      </S.Container>
{/*       <CardList/> */}
    </S.Wrapper>
  );
}
