import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledSocialBanner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: center;

  > i {
    width: 80px;
  }
`;

export const StyledTitle = styled.h3`
  padding: 0 16px;
  color: ${mainColors.white};
  letter-spacing: 2px;
`;
