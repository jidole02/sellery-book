import styled from "@emotion/styled";
import { WRAPPER, CONTAIENR } from "../styles";
import { COLOR } from "../styles/index";

export const Wrapper = styled(WRAPPER)`
  height: 70vh;
  flex-direction: column;
`;

export const NotMent = styled.span`
  font-size: 17px;
  color: #5b358d;
  font-weight: bold;
  margin-top: 10px;
`;

export const WriteBtn = styled.button`
  padding: 7px 15px;
  border: 1px solid ${COLOR.main};
  color: ${COLOR.main};
  border-radius: 3px;
  background: none;
  margin-top: 20px;
  font-size: 15px;
`;

export const TopBar = styled(WRAPPER)`
  background: #f9f9f9;
`;

export const TopBarContainer = styled(CONTAIENR)`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    gap: 25px;
    align-items: center;
    font-size: 17px;
    & aside {
      color: ${COLOR.text};
    }
  }
  & button {
    padding: 8px 12px;
    background: none;
    border: 1px solid ${COLOR.main};
    color: ${COLOR.main};
    font-size: 15px;
    border-radius: 3px;
  }
`;

export const GridContainer = styled(CONTAIENR)`
  display: grid;
  grid-template-columns: 530px 530px;
  align-content: space-around;
  justify-content: space-between;
  margin-top: 60px;
  grid-row-gap: 80px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 210px;
  border-right: 2px solid ${COLOR.sub};
  & img {
    width: 140px;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgb(190, 190, 190);
  }
`;

export const Infor = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
  & span {
    color: ${COLOR.main};
    margin-top: 20px;
    font-size: 15px;
  }
  & h3 {
    font-size: 22px;
    margin-top: 10px;
  }
  & time {
    font-size: 14px;
    color: ${COLOR.text};
    margin-top: 30px;
  }
  & div {
    position: absolute;
    bottom: 15px;
    right: 0;
    display: flex;
    gap: 15px;
    & button {
      border-radius: 24px;
      padding: 7px 20px;
      border: 1px solid ${COLOR.main};
      color: ${COLOR.main};
      font-size: 14px;
      background: none;
      &:last-of-type {
        color: white;
        background: ${COLOR.main};
      }
    }
  }
`;
