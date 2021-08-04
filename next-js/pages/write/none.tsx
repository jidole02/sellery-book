import * as S from "./styles";

export default function None({ length }) {
  return (
    <>
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
  );
}
