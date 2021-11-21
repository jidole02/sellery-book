import { useState } from "react";
import * as S from "../../../pagestyle/authstyles";
import auth from "../../../src/api/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
toast.configure({ autoClose: 2000 });

export default function SignUpPage() {
  const [data, setDate] = useState({
    email: "",
    pwd: "",
    checkPwd: "",
    nick: "",
  });
  const router = useRouter();
  const CheckEmail = (str: string): boolean => {
    var reg_email =/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  };
  const handleInput = (event): void => {
    const { name, value } = event.target;
    setDate({
      ...data,
      [name]: value,
    });
  };
  const { email, pwd, checkPwd, nick } = data;
  const subData = async () => {
    if (email && pwd && checkPwd && nick) {
      if (pwd !== checkPwd) {
        toast.warning("비밀번호가 다릅니다.");
        return;
      }
      if (pwd.length > 25 || pwd.length < 7) {
        toast.warning("비밀번호 글자수를 확인하세요.");
        return;
      }
      if (nick.length > 10) {
        toast.warning("닉네임 글자수를 확인하세요.");
        return;
      }
      if (!CheckEmail(email)) {
        toast.warning("이메일 양식을 맞추어주세요.");
        return;
      }
      // all pass
      await auth
        .signUp({ email: email, pwd: pwd, nick: nick })
        .then(() => {
          router.push("/auth/login");
          toast.success("회원가입에 성공하셨습니다!", { autoClose: 3000 });
        })
        .catch((err) => {
          if (err.response.status === 400)
            toast.error("이미 존재하는 이메일입니다.");
        });
    } else {
      toast.error("모든 정보를 입력해주세요.");
    }
  };
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
              onChange={handleInput}
              type="text"
              placeholder="사용할 이메일을 입력하세요."
              name="email"
            />
            <input
              onChange={handleInput}
              type="password"
              name="pwd"
              placeholder="사용할 비밀번호를 입력하세요. ( 7-25자 )"
            />
            <input
              onChange={handleInput}
              type="password"
              name="checkPwd"
              placeholder="비밀번호를 확인해주세요."
            />
            <input
              onChange={handleInput}
              type="text"
              name="nick"
              placeholder="사용할 닉네임을 입력해주세요. ( 1-10자 )"
            />
            <button onClick={subData}>회원가입</button>
          </S.InpContaienr>
        </>
      </S.Contaienr>
    </S.Wrapper>
  );
}
