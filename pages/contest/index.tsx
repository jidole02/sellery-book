import * as S from "../../pagestyle/conteststyles";
import CardList from "../../src/components/cardList";

export default function ContestPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <img src="/contest.jpg" />
        <CardList title="우승 후보 작품을 만나보세요!" condition={"contest"} />
      </S.Container>
    </S.Wrapper>
  );
}
