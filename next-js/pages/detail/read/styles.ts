import styled from "@emotion/styled";
import { COLOR, CONTAIENR, WRAPPER } from "../../../styles";

export const Wrapper = styled(WRAPPER)`
  background: #f3f3f3;
  padding-top: 60px;
  min-height: 100vh;
`;

export const Container = styled(CONTAIENR)`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 20px;
    color: black;
  }
`;

export const ReadArea = styled.div`
  display: flex;
  margin-top: 43px;
  justify-content: space-between;
  margin-bottom:100px;
  & div {
    padding: 33px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${COLOR.text};
    font-size:14px;
    font-weight:500;
    font-family:Arial, Helvetica, sans-serif;
  }
  & textarea {
    width:calc(100% - 50px);
    font-size:18px;
    padding: 33px 40px;
    margin-left:10px;
    border: none;
    color: black;
    box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.2);
    line-height:25px;
  }
`;
