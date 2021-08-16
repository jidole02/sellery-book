import styled from "@emotion/styled";
import { CONTAIENR, WRAPPER } from "../styles";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAIENR)`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  & img {
    width: 100%;
  }
`;
