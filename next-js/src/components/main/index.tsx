import Top from "./top";
import * as S from "./styles";
import CardList from "../cardList";

export default function ManiPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <Top />
        <CardList title="오늘의 신작" condition={"new"} />
        <CardList title="오늘의 신작" condition={"new"} />
        <CardList title="오늘의 신작" condition={"new"} />
        <CardList title="오늘의 신작" condition={"new"} />
      </S.Container>
    </S.Wrapper>
  );
}
