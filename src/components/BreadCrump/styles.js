import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledBreadcrump = styled.ul`
  margin: 0;
  padding: 0;
  padding: 32px 64px;
  list-style: none;

  @media screen and (max-width: 600px) {
    padding: 32px 16px 0 16px;
    font-size: 16px;
  }

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
