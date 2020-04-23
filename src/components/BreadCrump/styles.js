import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledBreadcrump = styled.ul`
  margin: 0;
  padding: 0;
  padding: ${props => (props.isDesktopDevice ? '32px 64px' : '32px 16px')};
  list-style: none;

  li {
    display: inline;
    font-size: 18px;
  }

  a {
    color: ${mainColors.brandColor};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  span {
    font-size: 20px;
    color: ${mainColors.brandColor};
    padding: 0 16px;
  }
`;
