import styled from 'styled-components';

export const StyledBody = styled.body`
  position: ${props => (props.shouldBeFixed ? 'fixed' : 'none')};
  width: 100%;
`;
