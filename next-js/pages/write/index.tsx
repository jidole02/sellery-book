import { useEffect, useState } from "react";
import * as S from "./styles";
import book from "../../src/api/book";

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
        <>
          {" "}
          <S.Wrapper id="flex-center">
            <img
              src="/notbook.png"
              style={{ width: "180px", height: "140px" }}
              alt=""
            />
            <S.NotMent>쓰던 책이 아무것도 없습니다.</S.NotMent>
            <S.WriteBtn>책 쓰기 {">"}</S.WriteBtn>
          </S.Wrapper>
        </>
      ) : (
        <>
          <S.TopBar>
            <S.TopBarContainer>
              <div>
                <span>
                  {localStorage ? localStorage.getItem("sellery-name") : ""} 님
                </span>
                <text>|</text>
                <aside>쓰고있던 작품 ({data.length}개)</aside>
              </div>
              <button>새책 쓰기</button>
            </S.TopBarContainer>
          </S.TopBar>
        </>
      )}
    </>
  );
}
