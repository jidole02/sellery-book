import styled from "@emotion/styled";
import { CONTAIENR, WRAPPER } from "../styles";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAIENR)`
  display: flex;
  flex-direction:column;
  padding-top: 40px;
  margin-bottom:100px;
  & img {
    width: 100%;
  }
`;
