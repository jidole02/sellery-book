import styled from "@emotion/styled";
import { WRAPPER } from "../../../styles";
import { COLOR, CONTAIENR } from "./../../../styles/index";

export const Wrapper = styled(WRAPPER)`
  border-bottom: 1px solid ${COLOR.border};
`;

export const Container = styled(CONTAIENR)`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
  }
  &:last-of-type {
    height: 60px;
  }
`;

export const Logo = styled.div`
  & b {
    color: ${COLOR.main};
    font-family: Comic Sans MS;
    font-size: 20px;
  }
  & span {
    color: black;
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 25px;
  background: black;
  margin: 0 13px;
`;

export const SearchBar = styled.div`
  width: 290px;
  height: 38px;
  border: 1px solid ${COLOR.main};
  border-radius: 3px;
  margin-left: 30px;
  padding: 0 15px;
  & input {
    color: ${COLOR.main};
    font-size: 15px;
    margin-left: 10px;
    &::placeholder {
      color: ${COLOR.main};
    }
  }
`;

export const AuthLink = styled.div`
  font-size: 15px;
  cursor: pointer;
  &:last-of-type {
    border: 1px solid ${COLOR.main};
    color: ${COLOR.main};
    padding: 6px 20px;
    border-radius: 24px;
  }
`;

export const Link = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;
  &.active {
    color: ${COLOR.main};
    border-bottom: 2px solid ${COLOR.main};
  }
`;
