import styled from "@emotion/styled";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Contaienr = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  & h1 {
    font-family: Comic Sans MS;
    font-size: 23px;
    font-weight: 500;
    & b {
      color: ${COLOR.main};
      font-family: Comic Sans MS;
    }
  }
  & h3 {
    color: ${COLOR.text};
    font-size: 15px;
    font-weight: 500;
    margin-top: 17px;
  }
`;

export const InpContaienr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  & input,
  button {
    padding: 17px 30px;
    border-radius: 3px;
  }
  & input {
    border: 1px solid ${COLOR.text};
    color: ${COLOR.text};
    letter-spacing: 0px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    &::placeholder {
      color: ${COLOR.text};
      letter-spacing: -1px;
    }
  }
  & input[type="password"] {
    letter-spacing: 2px;
    &::placeholder {
      letter-spacing: -1px;
    }
  }
  & button {
    font-size: 19px;
    font-weight: bold;
    background: ${COLOR.sub};
    color: white;
  }
`;

export const Quest = styled.div`
  color: ${COLOR.text};
  font-size: 14px;
  margin-top:70px;
  text-decoration:underline;
  cursor: pointer;
`;
