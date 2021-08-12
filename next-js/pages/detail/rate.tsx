import BigStarIcon from "../../src/assets/bigStar";
import * as S from "../../pagestyle/detailstyles";

export default function Rate({ callback, rate }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <S.StarWrapper>
      {arr.map((e, index) => (
        <BigStarIcon
          key={index}
          check={e <= rate ? true : false}
          callback={() => callback(e)}
          size={53}
        />
      ))} 
    </S.StarWrapper>
  );
}
