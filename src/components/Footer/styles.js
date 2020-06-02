import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledFooter = styled.div`
  background-color: ${mainColors.brandColor};
  color: ${mainColors.white};
  height: '100%';
`;

export const StyledSafePay = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  img {
    padding-right: 10px;
  }
`;

export const StyledPaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;
