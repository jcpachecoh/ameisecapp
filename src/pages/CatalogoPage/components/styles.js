import styled from 'styled-components';

import { mainColors } from '../../../constants';

export const StyledFullBanner = styled.div`
  display: flex;
  height: 900px;
  width: 100%;
  color: ${mainColors.white};
`;

export const StyledGrid = styled.div`
  margin: 10px 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(175px, 1fr));
`;

export const StyledGridItem = styled.div`
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledPrice = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${mainColors.darkGray};

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }

  .iva {
    padding-left: 10px;
    color: ${mainColors.darkGray};
    font-size: 12px;
  }
`;

export const StyledProductTitle = styled.span`
  color: ${mainColors.brandColor};
  font-size: 20px;
  font-weight: 800;
  margin: 20px 0 0 0;
  text-transform: capitalize;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StyledDescription = styled.span`
  font-size: 16px;
  color: ${mainColors.darkGray};
`;

export const StyledGridItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;

  i {
    left: calc(96% - 10px);
    top: -15px;
  }
`;
