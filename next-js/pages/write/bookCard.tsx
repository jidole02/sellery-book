import { getDate } from "../../src/utils/date";
import * as S from "./styles";
import { DOMAIN } from "./../../src/api/export";

interface props {
  title: string;
  genre: string;
  id: string | number;
  src: string;
  date: any;
}

export default function BookCard({ title, genre, id, src, date }: props) {
  return (
    <S.CardWrapper>
      <img src={DOMAIN + src} alt="" />
      <S.Infor>
        <span>{genre}</span>
        <h3>{title}</h3>
        <time>마지막 수정 {getDate(date)}</time>
        <div>
          <button>이어쓰기</button>
          <button>정보수정</button>
        </div>
      </S.Infor>
    </S.CardWrapper>
  );
}