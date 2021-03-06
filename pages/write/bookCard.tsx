import { getDate } from "../../src/utils/date";
import * as S from "../../pagestyle/writestyles";
import { DOMAIN } from "./../../src/api/export";
import { useRouter } from "next/router";

interface props {
  title: string;
  genre: string;
  id: string | number;
  src: string;
  date: any;
}

export default function BookCard({ title, genre, id, src, date }: props) {
  const router = useRouter();
  return (
    <S.CardWrapper>
      <img src={DOMAIN + src} alt="" />
      <S.Infor>
        <span>{genre}</span>
        <h3>{title}</h3>
        <time>마지막 수정 {getDate(date)}</time>
        <div>
          <button onClick={() => router.push(`/write/new/${id}`)}>
            이어쓰기
          </button>
          <button onClick={() => router.push(`/write/new?update=true&id=${id}`)}>정보수정</button>
        </div>
      </S.Infor>
    </S.CardWrapper>
  );
}
