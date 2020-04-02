import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledImg = styled.div`
  background: ${mainColors.white};
  text-align: center;

  img {
    width: ${props => props.size};
    height: auto;
  }
`;
