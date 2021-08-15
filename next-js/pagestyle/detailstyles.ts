import styled from "@emotion/styled";
import { COLOR, CONTAIENR, WRAPPER } from "../styles";

export const Wrapper = styled(WRAPPER)`
  padding-top: 35px;
`;

export const Container = styled(CONTAIENR)`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const BookInfo = styled.section`
  width: 100%;
  display: flex;
  gap: 28px;
  height: 300px;
  position: relative;
  & img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  }
  & article {
    display: flex;
    flex-direction: column;
    & aside {
      color: ${COLOR.main};
      font-size: 17px;
      font-weight: bold;
      margin-top: 32px;
    }
    & h3 {
      color: black;
      font-size: 28px;
      font-weight: 800;
      margin-top: 18px;
      margin-bottom: 15px;
    }
    & span {
      color: ${COLOR.text};
      font-size: 16px;
      & b {
        margin: 0 10px;
        font-weight: 500;
      }
    }
  }
  & button {
    width: 167px;
    height: 46px;
    border: 1px solid ${COLOR.sub};
    color: ${COLOR.sub};
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

interface lineProps {
  margin: number;
}

export const Line = styled.div<lineProps>`
  width: 100%;
  height: 1px;
  background: #dcdcdc;
  margin-top: ${(res) => `${res.margin}px`};
`;

export const IntroComment = styled.div`
  margin-top: 40px;
  background: #f8f8f8;
  border: 1px solid #cccccc;
  padding: 30px 42px;
  & h6 {
    color: ${COLOR.text};
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  & textarea {
    width: 100%;
    border: none;
    background: none;
    margin: 0;
    font-size: 17px;
    font-weight: 500;
    color: black;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  & h4 {
    font-size: 17px;
    color: ${COLOR.text};
    &:last-of-type {
      margin-top: 50px;
    }
  }
  & textarea {
    width: 100%;
    background: none;
    border: none;
    margin-top: 30px;
    font-size: 16px;
    color: black;
  }
`;

export const ReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;
  & h3 {
    font-size: 23px;
    font-weight: bold;
    color: black;
  }
  & aside {
    font-size: 17px;
    font-weight: bold;
    color: ${COLOR.text};
    margin-top: 13px;
  }
  & textarea {
    border: 1px solid #cccccc;
    background: #f8f8f8;
    width: 100%;
    padding: 30px 40px;
    color: black;
    font-size: 17px;
    margin-top: 60px;
    resize: none;
    &::placeholder {
      color: ${COLOR.text};
    }
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid ${COLOR.border};
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CommentInfo = styled.section`
  display: flex;
  flex-direction: column;
  & div {
    display: flex;
    gap: 5px;
  }
  & article {
    margin-top: 16px;
    max-width: 150px;
    & span {
      font-size: 17px;
      color: black;
    }
    & time {
      font-size: 14px;
      margin-left: 12px;
      color: ${COLOR.text};
    }
  }
`;

export const CommentContents = styled.div`
  font-size: 17px;
  color: black;
  width: 900px;
  max-width: 900px;
  margin: 0;
  word-break: break-all;
  margin-top: 10px;
`;

export const StarWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
