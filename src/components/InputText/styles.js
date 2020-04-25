import styled from 'styled-components';

export const StyledInputText = styled.input`
  font-size: 16px;
  padding: 16px 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: ${props => props.width};
`;
