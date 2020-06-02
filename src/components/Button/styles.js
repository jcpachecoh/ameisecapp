import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledButton = styled.button`
  background-color: ${props =>
    props.type === 'secondary' ? mainColors.white : mainColors.brandColor};
  border: none;
  color: ${props => (props.type === 'secondary' ? mainColors.black : mainColors.white)};
  padding: ${props => (props.isDesktopDevice ? '6px' : '12px')};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border: ${props => (props.type === 'secondary' ? '1px solid #000' : 'none')};
  border-radius: 12px;
  z-index: ${props => props.zIndex};
  margin: 6px 12px;
  width: ${props => (props.width ? props.width : '100%')};
  outline: none;
  align-self: center;

  :disabled {
    background-color: ${mainColors.darkGray};
  }
`;
