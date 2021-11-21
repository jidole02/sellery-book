import styled from "@emotion/styled";
import { CARD_SIZE } from "../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Title = styled.div`
  border-top: 1px solid #dcdcdc;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${`repeat(5,${CARD_SIZE}px)`};
  justify-content: space-between;
  margin-top: 25px;
  grid-row-gap: 40px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
`;
