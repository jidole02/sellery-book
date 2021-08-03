import * as S from "../styles";

export default function LoginPage() {
  return (
    <S.Wrapper id="row-center">
      <S.Contaienr>
        <>
          <h1>
            sign up with <b>SELLERY</b>
          </h1>
          <h3>회원가입을 환영합니다.</h3>
        </>
        <>
          <S.InpContaienr>
            <input
              type="text"
              placeholder="사용할 이메일을 입력하세요."
              name=""
            />{" "}
            <input
              type="text"
              placeholder="사용할 이메일을 입력하세요."
              name=""
            />{" "}
            <input
              type="text"
              placeholder="사용할 이메일을 입력하세요."
              name=""
            />{" "}
            <input
              type="text"
              placeholder="사용할 이메일을 입력하세요."
              name=""
            />
            <button>회원가입</button>
          </S.InpContaienr>
        </>
      </S.Contaienr>
    </S.Wrapper>
  );
}
