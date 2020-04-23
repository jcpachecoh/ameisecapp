import styled from 'styled-components';

import { mainColors } from '../../../constants';

export const StyledShopCar = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledShopCarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 12px;
`;

export const StyledArticleName = styled.div`
  font-weight: 800;
  font-size: 12px;
  color: ${mainColors.brandColor};

  div:first-child {
    height: 20px;
  }
`;

export const StyledArticlePrice = styled.div`
  font-size: 14px;
  color: ${mainColors.brandColor};
`;

export const StyledArticleImage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 8px;
  color: ${mainColors.brandColor};
`;

export const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  overflow: scroll;
`;

export const StyledShopCarSummary = styled.div`
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  right: 0;
  bottom: 80px;
  width: 100%;

  > button {
    align-self: center;
  }
`;

export const StyledShopCarSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${mainColors.black};
  padding: ${props => (props.isDesktopDevice ? '0 12px' : '12px')};
  text-align: end;
  background-color: ${mainColors.lightGray};
`;
