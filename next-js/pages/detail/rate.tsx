import BigStarIcon from "../../src/assets/bigStar";
import * as S from "./styles";

export default function Rate() {
  return (
    <S.StarWrapper>
      <BigStarIcon check={true} callback={()=>{}} />
      <BigStarIcon check={true} callback={()=>{}} />
      <BigStarIcon check={true} callback={()=>{}} />
      <BigStarIcon check={true} callback={()=>{}} />
      <BigStarIcon check={true} callback={()=>{}} />
    </S.StarWrapper>
  );
}
