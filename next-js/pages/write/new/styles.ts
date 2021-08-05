import styled from "@emotion/styled";
import { CONTAIENR, WRAPPER } from "../../../styles";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled(WRAPPER)`
  padding-top: 35px;
  padding-bottom: 150px;
`;

export const Container = styled(CONTAIENR)`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  border-left: 4px solid ${COLOR.sub};
  background: ${COLOR.background};
  padding: 16px 20px;
  color: ${COLOR.text};
  margin-top: 25px;
  font-size: 14px;
  & p {
    margin: 0;
    padding: 4px 0;
  }
`;

export const InpContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const LEFT_SIDE = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & button {
    width: 100%;
    height: 360px;
    background: none;
    border: 2px dotted rgb(200, 200, 200);
    font-size: 80px;
    color: rgb(200, 200, 200);
    &::after {
      content: "+";
    }
  }
  & p {
    text-align: center;
    font-size: 15px;
    color: ${COLOR.text};
    margin-top: 30px;
  }
`;

export const RIGHT_SIDE = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 820px;
  & button {
    background: ${COLOR.main};
    color: white;
    width: 100%;
    font-size: 20px;
    padding: 15px 0;
    box-sizing: content-box;
    border-radius: 3px;
    margin-top: 20px;
    font-weight: bold;
    opacity: 0.5;
  }
`;

export const Tip = styled.div`
  padding-bottom: 15px;
  font-size: 17px;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  display: flex;
  align-items: center;
  & b {
    font-size: 18px;
    color: ${COLOR.main};
  }
  & aside {
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 17px;
  color: black;
  font-weight: bold;
  & input,
  textarea,
  select {
    outline: none;
    border: 1px solid ${COLOR.text};
    color: ${COLOR.text};
    box-sizing: border-box;
    padding: 16px 20px;
    font-size: 15px;
    color: black;
    &::placeholder {
      color: ${COLOR.text};
    }
    border-radius: 3px;
    background: ${COLOR.background};
  }
  & textarea {
    height: 150px;
    resize: none;
  }
  & select {
    background: none;
    border: 1px solid ${COLOR.main};
    color: ${COLOR.main};
    cursor: pointer;
  }
`;
