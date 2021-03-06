import Top from "./top";
import * as S from "./styles";
import CardList from "../cardList";

export default function ManiPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <Top />
        <CardList title="인기작품을 만나보세요!" condition={"mostview"} />
        <S.Slide src="/contest.jpg" alt="" />
        <CardList title="따끈따끈한 오늘의 신작" condition={"new"} />
        <CardList title="평점이 높은 작품" condition={"mostrate"} />
        <S.Slide src="/recommend.jpg" alt="" />
        <CardList title="나를 위한 자기계발 도서" condition={`genre?genre=자기계발`} />
        <CardList title="세상을 바라보는 경제경영 도서" condition={`genre?genre=경제경영`} />
        <CardList title="상상에 상상을 더하다, SF판타지" condition={`genre?genre=SF판타지`} />
        <CardList title="흥미진진한 이야기, 소설" condition={`genre?genre=소설`} />
      </S.Container>
    </S.Wrapper>
  );
}
