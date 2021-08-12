import * as S from "../../../pagestyle/authstyles";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import auth from "../../../src/api/auth";
import { toast } from "react-toastify";
toast.configure({ autoClose: 2000 });

export default function LoginPage() {
  const router = useRouter();
  const [data, setDate] = useState({
    email: "",
    pwd: "",
  });
  const { email, pwd } = data;
  const handleInput = (event): void => {
    const { name, value } = event.target;
    setDate({
      ...data,
      [name]: value,
    });
  };
  const subData = async () => {
    if (email && pwd) {
      await auth
        .login({ email: email, pwd: pwd })
        .then((res) => {
          if (!res.data.login) {
            toast.error(res.data.message);
            return;
          }
          localStorage.setItem("sellery-token", res.data.token);
          router.push("/");
          toast.success("로그인 되었습니다.");
        })
        .catch((err) => {
          if (err.response.status === 400)
            toast.warning("비밀번호가 틀렸습니다.");
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
              onChange={handleInput}
            />{" "}
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="pwd"
              onChange={handleInput}
            />{" "}
            <button onClick={subData}>로그인</button>
          </S.InpContaienr>
          <S.Quest id="row-center" onClick={() => router.push("/auth/signup")}>
            계정이 없으신가요?
          </S.Quest>
        </>
      </S.Contaienr>
    </S.Wrapper>
  );
}
