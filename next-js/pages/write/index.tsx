import { useEffect, useState } from "react";
import * as S from "./styles";
import book from "../../src/api/book";
import None from "./none";
import BookCard from "./bookCard";
import { WRAPPER } from "../../styles";

export default function WritePage() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    book
      .getWriteBook()
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.length === 0 ? (
        <None length={data.length} />
      ) : (
        <>
          <>
            <S.TopBar>
              <S.TopBarContainer>
                <div>
                  <span>
                    {localStorage ? localStorage.getItem("sellery-name") : ""}{" "}
                    님
                  </span>
                  <span>|</span>
                  <aside>쓰고있던 작품 ({data.length}개)</aside>
                </div>
                <button>새책 쓰기</button>
              </S.TopBarContainer>
            </S.TopBar>
          </>
          <>
            <WRAPPER>
              <S.GridContainer>
                {data.map((obj, index) => (
                  <BookCard
                    key={index}
                    title={obj.title}
                    genre={obj.genre}
                    src={obj.coverImg}
                    id={obj["_id"]}
                    date={obj.date}
                  />
                ))}
              </S.GridContainer>
            </WRAPPER>
          </>
        </>
      )}
    </>
  );
}
