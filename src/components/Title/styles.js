import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledTitle = styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : '22px')};
  text-align: center;
  color: ${mainColors.brandColor};
  margin: 20px 16px;
  text-transform: capitalize;
`;
