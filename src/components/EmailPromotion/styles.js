import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledEmailPromotion = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${mainColors.lightGray};
  color: ${mainColors.black};
  margin: auto;
  padding: 32px 16px;
  text-align: center;
  height: 100%;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;

  h2 {
    font-size: 18px;
  }
`;
