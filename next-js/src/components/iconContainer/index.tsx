import * as S from "./styles";
import EyeIcon from "../../assets/eye";
import StarIcon from "../../assets/star";

interface props{
    see : number | string;
    rate : number;
    margin? : number;
}

export default function IconContainer({see,rate,margin} : props) {
  return (
    <S.IconWrapper style={{marginTop:`${margin}px`}}>
      <div>
        <EyeIcon /> {see}
      </div>
      <div>
        <StarIcon /> {rate}
      </div>
    </S.IconWrapper>
  );
}
