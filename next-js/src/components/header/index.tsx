import SearchIcon from "../../assets/searchIcon";
import * as S from "./styles";
import { useRouter } from "next/router";
import NavLink from "./navLink";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <>
            <div>
              <S.Logo>
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
              <S.AuthLink onClick={() => router.push("/signup")}>
                회원가입
              </S.AuthLink>
              <S.AuthLink onClick={() => router.push("/login")}>
                로그인
              </S.AuthLink>
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
    </>
  );
}
