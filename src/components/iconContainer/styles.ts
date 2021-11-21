import styled from '@emotion/styled'
import { COLOR } from '../../../styles';

export const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
  & div {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${COLOR.text};
    &:last-of-type {
      color: ${COLOR.yellow};
    }
  }
`;