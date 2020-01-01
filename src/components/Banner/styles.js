import styled from 'styled-components';

export const StylesBanner = styled.div`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
`;
