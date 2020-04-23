import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-indent: 5;
  margin-top: 10px;

  textArea {
    border: 1px solid black;
  }

  label {
    color: ${mainColors.brandColor};
    font-size: 20px;
  }
`;
