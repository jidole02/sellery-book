import styled from "@emotion/styled";
import { COLOR, CONTAIENR, WRAPPER } from "../styles";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAIENR)`
  padding-top: 40px;
  margin-bottom: 100px;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px 40px;
  flex-wrap: wrap;
`;

interface labelProps {
  check: boolean;
}

export const GenreLabel = styled.label<labelProps>`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${(res) => (res.check ? COLOR.main : "black")};
  & input[type="radio"] {
    margin: 0;
    display: none;
  }
`;

export const SortLabel = styled.label<labelProps>`
  cursor: pointer;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  display:flex;
  align-items:center;
  color: ${(res) => (res.check ? COLOR.main : COLOR.text)};
  & input[type="radio"] {
    margin: 0;
    display: none;
  }
  & div {
    width: 6px;
    height: 6px;
    border-radius:80%;
    margin-right:10px;
    background-color: ${(res) => (res.check ? COLOR.main : COLOR.text)};
  }
`;
