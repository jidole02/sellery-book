import IconContainer from "../iconContainer";
import * as S from "./styles";
import { DOMAIN } from "./../../api/export";

export default function BookCard({ title, src, see, rate, name,genre }) {
  return (
    <S.Wrapper>
      <img src={DOMAIN + src} />
      <h3>{title}</h3>
      <span>{name} 작가 </span>
      <aside>{genre}</aside>
      <IconContainer see={see} rate={rate} margin={18} />
    </S.Wrapper>
  );
}
