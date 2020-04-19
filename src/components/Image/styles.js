import styled from 'styled-components';

export const StyledImg = styled.div`
  text-align: center;

  img {
    width: ${props => props.size};
    height: auto;

    &:hover {
      opacity: ${props => (props.highLight ? 0.5 : 1)};
      cursor: ${props => (props.highLight ? 'pointer' : 'auto')};
    }
  }
`;
