import styled from '@emotion/styled'
import { WRAPPER } from '../../styles'
import { COLOR } from './../../styles/index';

export const Wrapper = styled(WRAPPER)`
height:70vh;
flex-direction:column;
`

export const NotMent = styled.span`
font-size:17px;
color:#5B358D;
font-weight:bold;
margin-top:10px;
`

export const WriteBtn = styled.button`
padding:7px 15px;
border:1px solid ${COLOR.main};
color:${COLOR.main};
border-radius:3px;
background:none;
margin-top:20px;
font-size:15px;
`