import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledButton = styled.button`
  background-color: ${props =>
    props.type === 'secondary' ? mainColors.black : mainColors.brandColor};
  border: none;
  color: ${mainColors.white};
  padding: ${props => (props.type === 'secondary' ? '16px' : '15px 16px')};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border: ${props => (props.type === 'secondary' ? '1px solid #fff' : 'none')};
  border-radius: 12px;
  z-index: ${props => props.zIndex};
  margin: 6px 12px;
`;
