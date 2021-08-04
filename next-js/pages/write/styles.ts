import styled from "@emotion/styled";
import { WRAPPER,CONTAIENR } from "../../styles";
import { COLOR } from "./../../styles/index";

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
background:#F9F9F9;
`

export const TopBarContainer = styled(CONTAIENR)`
padding:15px 0;
display:flex;
justify-content:space-between;
align-items:center;
& div{
    display:flex;
    gap:25px;
    align-items:center;
    font-size:17px;
    & aside{
        color:${COLOR.text};
    }
}
& button{
    padding:8px 12px;
    background:none;
    border:1px solid ${COLOR.main};
    color:${COLOR.main};
    font-size:15px;
    border-radius:3px;
}
`