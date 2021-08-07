import IconContainer from "../iconContainer";
import * as S from "./styles";

export default function BookCard() {
  return (
    <S.Wrapper>
      <img src="https://i.pinimg.com/236x/37/6a/97/376a974dee16153f43731681d33d76ee.jpg" />
      <h3>오늘이 가기 전에 해야하는 말</h3>
      <span>설운도 작가 </span>
      <IconContainer see={100} rate={100} margin={18} />
    </S.Wrapper>
  );
}
