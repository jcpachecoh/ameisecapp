import styled from 'styled-components';

export const StylesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  font-size: 12px;
  width: 80%;
  padding: 210px 0;

  > div {
    text-align: center;
    margin: 10px;
  }
  div:first-child {
    font-size: 36px;
    color: #ffffff;
  }
`;
