import styled from "@emotion/styled";
import { CARD_SIZE, COLOR } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  & img {
    width: 100%;
    height: ${`${CARD_SIZE*1.5}px`};
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  }
  & h3 {
    margin-top: 20px;
  }
  & span {
    color: ${COLOR.text};
    font-size: 16px;
    margin-top: 7px;
  }
  & aside {
    color: ${COLOR.main};
    font-size: 13px;
    margin-top: 11px;
  }
`;
