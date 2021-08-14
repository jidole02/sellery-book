import BookCard from "../bookCard";
import * as S from "./styles";
import pbook from "../../api/pbook";
import { useEffect, useState } from "react";

interface props {
  title: string;
  condition: string;
  border?:boolean;
}

export default function CardList({ title, condition,border = true }: props) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    pbook.getPBook(condition).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <S.Wrapper>
      <S.Title border={border}>{title}</S.Title>
      <S.List>
        {data.map((obj, index) => (
          <BookCard
            title={obj.title}
            src={obj.coverImg}
            see={obj.views}
            rate={obj.rate}
            key={index}
            name={obj.writerName}
            genre={obj.genre}
            id={obj["_id"]}
          />
        ))}
      </S.List>
    </S.Wrapper>
  );
}
