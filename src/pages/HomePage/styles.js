import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StylesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  font-size: 12px;
  width: 80%;
  padding: 210px 0;
  align-items: center;

  > span {
    text-align: center;
    margin: 10px;
  }
  span:first-child {
    font-size: 36px;
    color: ${mainColors.white};
    font-weight: 800;
    z-index: 10;
  }
`;
