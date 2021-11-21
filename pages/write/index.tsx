import { useEffect, useState } from "react";
import * as S from "../../pagestyle/writestyles";
import book from "../../src/api/book";
import None from "./none";
import BookCard from "./bookCard";
import { useRouter } from "next/router";

export default function WritePage() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    book
      .getWriteBook()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.length === 0 ? (
        <None />
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
                <button onClick={() => router.push("/write/new")}>
                  새책 쓰기
                </button>
              </S.TopBarContainer>
            </S.TopBar>
          </>
          <>
            <S.SubWrapper>
              <S.SubContainer>
                <S.Description>
                  한번에 집필할 수 있는 책은 최대 2권입니다.
                </S.Description>
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
              </S.SubContainer>
            </S.SubWrapper>
          </>
        </>
      )}
    </>
  );
}
