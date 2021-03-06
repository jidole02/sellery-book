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
        router.push("/");
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
          if (res.data.checked) {
            setName(res.data.username);
            localStorage.setItem("sellery-name", res.data.username);
          } else {
            localStorage.setItem("sellery-token", "");
            localStorage.setItem("sellery-name", "");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setName("");
      localStorage.setItem("sellery-token", "");
      localStorage.setItem("sellery-name", "");
    }
  }, [toggle, router.pathname]);
  const search = (e): void => {
    const value = e.target.value;
    if (e.keyCode === 13 && value) {
      router.push(`/search?title=${value}`);
      e.target.value = "";
    }
  };
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
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  onKeyDown={search}
                />
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
              <NavLink
                content="전체보기"
                href="/all?page=1&genre=전체&sort=전체"
              />
              <NavLink content="셀러리공모전" href="/contest" />
              <NavLink content="책 집필하기" href="/write" />
            </div>
          </>
        </S.Container>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
