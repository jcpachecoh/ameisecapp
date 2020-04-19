import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledDropdown = styled.select`
  border: 1px solid ${mainColors.black};
  margin: 10px 0;
  text-indent: 5px;
  max-height: calc(1.2em + 24px);
  height: calc(1.2em + 24px);
`;
