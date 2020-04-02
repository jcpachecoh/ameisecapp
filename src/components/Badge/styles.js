import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledBadge = styled.div`
  box-sizing: border-box;
  display: inline-block;
  background-color: ${mainColors.red};
  color: $badge-text-color;

  border-radius: 3rem;
  text-align: center;

  font-size: 10px;
  font-weight: 400;
  height: 15px;
  line-height: inherit;
  width: 15px;
`;
