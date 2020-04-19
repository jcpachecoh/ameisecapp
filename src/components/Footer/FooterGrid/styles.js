import styled from 'styled-components';

import { mainColors } from '../../../constants';

export const StylesFooterGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.isDesktopDevice ? 'auto auto auto' : 'auto auto')};
  grid-gap: 40px;
  padding: ${props => (props.isDesktopDevice ? '32px 128px;' : '32px 16px')};

  a {
    font-size: 18px;
    color: ${mainColors.white};
    padding: 3px 16px;
    text-align: left;

    &:hover {
      text-decoration: none;
      opacity: 0.8;
      color: ${mainColors.lightGray};
    }
  }

  h3 {
    font-size: 24px;
    color: ${mainColors.white};
    font-weight: 800;
    letter-spacing: 2px;
    text-align: left;
  }
`;

export const StyledFooterGridItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
