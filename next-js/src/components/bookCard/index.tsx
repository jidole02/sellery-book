import IconContainer from "../iconContainer";
import * as S from "./styles";
import { DOMAIN } from "./../../api/export";
import { useRouter } from 'next/dist/client/router';
import { numberToKorean } from './../../utils/chageNum';

export default function BookCard({ title, src, see, rate, name,genre,id }) {
  const router = useRouter();
  return (
    <S.Wrapper onClick={()=>router.push(`/detail/${id}`)}>
      <img src={DOMAIN + src} />
      <h3>{title}</h3>
      <span>{name} 작가 </span>
      <aside>{genre}</aside>
      <IconContainer see={numberToKorean(see)} rate={rate} margin={18} />
    </S.Wrapper>
  );
}
