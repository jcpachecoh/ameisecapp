import styled from 'styled-components';
import { mainColors } from '../../../constants';

export const StyledFullBanner = styled.div`
  display: flex;
  height: 440px;
  width: 100%;
  color: ${mainColors.white};
`;

export const StyledGrid = styled.div`
    margin: 10px 16px;
    display: grid;
    grid-template-columns: repeat(2, minmax(175px, 1fr) );
`;

export const StyledGridItem = styled.div`
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledPrice = styled.span`
    font-size: 14px;
    font-weight: 800;
`;

export const StyledProductTitle = styled.span`
    font-size: 16px;
    color: ${mainColors.darkGray}
`;