import styled from 'styled-components';

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 32px 64px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 32px 16px;
  }
`;

export const StyledProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 50%;
  padding: 30px 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledSlider = styled.div`
  padding: 10px;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledColors = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledColor = styled.div`
  border: 1px solid #000;
  height: ${props => (props.selected ? '48px' : '32px')};
  background-color: ${props => props.colorHexa};
  width: ${props => (props.selected ? '48px' : '32px')};
  margin: 0 10px;
  padding: 2px;

  &:hover {
    height: 48px;
    width: 48px;
    cursor: pointer;
  }
`;
