import BookCard from "../bookCard";
import * as S from "./styles";

interface props {
  title: string;
  data: any[];
}

export default function CardList({ title, data }: props) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.List>
        {data.map((e, index) => (
          <BookCard key={index} />
        ))}
      </S.List>
    </S.Wrapper>
  );
}
