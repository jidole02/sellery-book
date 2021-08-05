import * as S from "./styles";
import { useRouter } from "next/router";

export default function None() {
  const router = useRouter();
  return (
    <>
      <S.Wrapper id="flex-center">
        <img
          src="/notbook.png"
          style={{ width: "180px", height: "140px" }}
          alt=""
        />
        <S.NotMent>쓰던 책이 아무것도 없습니다.</S.NotMent>
        <S.WriteBtn onClick={() => router.push("/write/new")}>
          책 쓰기 {">"}
        </S.WriteBtn>
      </S.Wrapper>
    </>
  );
}
