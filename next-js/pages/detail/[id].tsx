import IconContainer from "../../src/components/iconContainer";
import Rate from "./rate";
import * as S from "./styles";

export default function DetailPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.BookInfo>
            <img
              src="https://lh3.googleusercontent.com/proxy/0VP6o7G6iA48A40WHbGiFeHMftWXzie5tGlwLrUeo2xULefp9NjMWYv_in6op9kGIbH2qu1TQVIB25t52zeI1ABaVsVMyMR71gy8jdgbPQDLH5s-_sW3zpbe"
              alt=""
            />
            <article>
              <aside>로맨스</aside>
              <h3>오늘을 사랑하자</h3>
              <span>
                김팔복 작가 <b>|</b>최초 공개 3일 전
              </span>
              <IconContainer see={200} rate={0} margin={40} />
            </article>
            <button>무료보기</button>
          </S.BookInfo>
        </>
        <S.Line margin={40} />
        <>
          <S.IntroComment>
            <h6>[내용소개]</h6>
            <p>재밌게 읽어라</p>
          </S.IntroComment>
        </>
        <>
          <S.BottomContainer>
            <>
              <h4>김팔복 작가의 말</h4>
              <S.Line margin={20} />
              <p>제가 진짜 있는 힘 없는 힘 다 써서 쓴 글입니다.</p>
            </>
            <>
              <h4>전체 리뷰</h4>
              <S.Line margin={20} />
              <S.ReviewWrapper>
                  <h3>책은 어떠셨나요?</h3>
                  <aside>리뷰는 언제나 큰 도움이 된다는 사실!</aside>
                  <Rate/>
                  <textarea name="" placeholder="댓글을 입력해 주세요. (엔터를 누르면 등록됩니다.)" ></textarea>
              </S.ReviewWrapper>
            </>
          </S.BottomContainer>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
