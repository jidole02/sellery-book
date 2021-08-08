import styled from "@emotion/styled";
import { COLOR } from "../../../../styles";

export const Wrapper = styled.div`
  width: 648px;
  height: 304px;
  border-radius: 10px;
  overflow: hidden;
/*   box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.16); */
  position: relative;
`;

export const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  & svg {
    cursor: pointer;
  }
`;

export const Slider = styled.div`
  width: 400%;
  height: 100%;
  display: flex;
  overflow: scroll;
  transition: 0.8s;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 25%;
  height: 100%;
  padding: 60px 80px;
  display: flex;
  justify-content: space-between;
  background: #abffd5;
  &:nth-of-type(2) {
    background: #ffd2ab;
  }
  &:nth-of-type(3) {
    background: #ffabd8;
  }
  &:nth-of-type(4) {
    background: #abd5ff;
  }
`;

export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 26px;
    font-weight: 800;
  }
  & span {
    font-size: 18px;
    font-weight: bold;
    & mark {
      padding: 6px 6px;
      background: #fffcac;
    }
  }
  & button {
    width: 100px;
    border-radius: 3px;
    font-size: 16px;
    color: white;
    padding: 9px 18px;
    background: black;
  }
`;

export const ConverImg = styled.img`
  width: 132px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & section {
    width: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: content-box;
    position: relative;
    & article {
      cursor: pointer;
      display: flex;
      gap: 27px;
      box-sizing: content-box;
      &:first-of-type{
        padding-bottom:30px;
        border-bottom:1px solid #dcdcdc;
      }
      & img {
        width: 80px;
        height: 120px;
        object-fit: cover;
      }
      & h3 {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 2px;
      }
      & span {
        font-size: 14px;
        color: ${COLOR.text};
      }
      & aside {
        margin-top: 10px;
        color: ${COLOR.main};
        font-size: 13px;
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dcdcdc;
`;
