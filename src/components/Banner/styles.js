import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StylesBanner = styled.div`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: -8px;

  > span {
    text-align: center;
    margin: 10px;
    font-size: 36px;
    color: ${mainColors.white};
    font-weight: 800;
    z-index: 1;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
