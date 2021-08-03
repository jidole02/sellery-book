import * as S from "../styles";

export default function SignUpPage() {
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
              name="email"
            />{" "}
            <input
              type="password"
              name="pwd"
              placeholder="사용할 비밀번호를 입력하세요. ( 7-25자 )"
            />{" "}
            <input
              type="password"
              name="checkPwd"
              placeholder="비밀번호를 확인해주세요."
            />{" "}
            <input
              type="text"
              name="nick"
              placeholder="사용할 닉네임을 입력해주세요. ( 1-10자 )"
            />
            <button>회원가입</button>
          </S.InpContaienr>
        </>
      </S.Contaienr>
    </S.Wrapper>
  );
}
