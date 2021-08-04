import SearchIcon from "../../assets/searchIcon";
import * as S from "./styles";
import { useRouter } from "next/router";
import NavLink from "./navLink";
import { useEffect, useState } from "react";
import auth from "../../api/auth";
import { toast } from "react-toastify";
toast.configure({ autoClose: 2000 });

export default function Header() {
  const router = useRouter();
  const [name, setName] = useState<string>();
  const [toggle, setToggle] = useState<boolean>(false);
  const logout = (): void => {
    auth
      .logout()
      .then(() => {
        localStorage.setItem("sellery-token", "");
        setToggle(!toggle);
        toast.success("로그아웃 되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("로그아웃에 실패하였습니다.");
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("sellery-token");
    if (token) {
      auth
        .tokenCheck(token)
        .then((res) => {
          if (res.data.checked) setName(res.data.username);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setName("");
    }
  }, [toggle, router.pathname]);
  return (
    <S.AllWrapper>
      <S.Wrapper>
        <S.Container>
          <>
            <div>
              <S.Logo onClick={() => router.push("/")}>
                <b>SELLERY</b>
                <S.Line />
                <span>샐러리북</span>
              </S.Logo>
              <S.SearchBar>
                <SearchIcon />
                <input type="text" placeholder="검색어를 입력하세요." />
              </S.SearchBar>
            </div>
          </>
          <>
            <div style={{ gap: "20px" }}>
              {name ? (
                <>
                  <S.AuthLink onClick={logout}>로그아웃</S.AuthLink>
                  <S.AuthLink onClick={() => router.push("/mypage")}>
                    {name} 님
                  </S.AuthLink>
                </>
              ) : (
                <>
                  <S.AuthLink onClick={() => router.push("/auth/signup")}>
                    회원가입
                  </S.AuthLink>
                  <S.AuthLink onClick={() => router.push("/auth/login")}>
                    로그인
                  </S.AuthLink>
                </>
              )}
            </div>
          </>
        </S.Container>
      </S.Wrapper>
      <S.Wrapper>
        <S.Container>
          <>
            <div style={{ gap: "50px", height: "100%" }}>
              <NavLink content="메인페이지" href="/" />
              <NavLink content="베스트셀러" href="/best" />
              <NavLink content="전체보기" href="/all" />
              <NavLink content="책 집필하기" href="/write" />
            </div>
          </>
        </S.Container>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
