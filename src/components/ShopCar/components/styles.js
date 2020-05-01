import styled from 'styled-components';

import { mainColors } from '../../../constants';

export const StyledShopCar = styled.div`
  padding: 32px 64px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 32px 16px;
  }
`;

export const StyledShopCarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 12px;

  input {
    padding-left: 10px;
    width: 40px;
    border: 1px solid black;
  }
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
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledShopCarSummary = styled.div`
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  right: 0;
  bottom: 80px;
  width: 100%;
  align-items: flex-end;
  background-color: ${mainColors.lightGray};
  padding: 16px 0;

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
  height: 50px;
  width: 300px;
`;

export const StyledQuantity = styled.input`
  width: 20px;
  height: 20px;
  padding: 6px;
`;

export const StyledEmptyCar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledSignUpSelection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`;

export const StyledSignUpSelectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`;

export const StyledUserData = styled.div`
  display: flex;
  flex-direction: column;
`;