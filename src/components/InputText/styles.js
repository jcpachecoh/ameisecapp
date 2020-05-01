import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledInputText = styled.input`
  font-size: 16px;
  padding: 16px 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: ${props => props.width};
`;

export const StyledLabel = styled.label`
  margin: 12px 0;
  font-size: 16px;
`;

export const StyledErrorLabel = styled.label`
  font-size: 14px;
  color: ${mainColors.red};
`;
