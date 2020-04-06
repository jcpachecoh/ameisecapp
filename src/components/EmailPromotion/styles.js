import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledEmailPromotion = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${mainColors.lightGray};
  color: ${mainColors.black};
  margin: auto;
  padding: 10px 16px;
  text-align: center;
  height: 200px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    font-size: 24px;
  }
`;
