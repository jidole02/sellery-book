import * as S from "../styles";
import { useRouter } from "next/dist/client/router";

export default function LoginPage() {
  const router = useRouter();
  return (
    <S.Wrapper id="row-center">
      <S.Contaienr>
        <>
          <h1>
            login with <b>SELLERY</b>
          </h1>
          <h3>로그인 후 작품을 감상하세요!</h3>
        </>
        <>
          <S.InpContaienr>
            <input
              type="text"
              placeholder="이메일을 입력하세요."
              name="email"
            />{" "}
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
            />{" "}
            <button>로그인</button>
          </S.InpContaienr>
          <S.Quest id="row-center" onClick={() => router.push("/auth/signup")}>
            계정이 없으신가요?
          </S.Quest>
        </>
      </S.Contaienr>
    </S.Wrapper>
  );
}
