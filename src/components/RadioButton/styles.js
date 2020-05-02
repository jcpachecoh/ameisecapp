import styled from 'styled-components';

export const StyledRadioButton = styled.input`
  display: none;
  margin: 0;
  padding: 0;

  &:active {
    opacity: 0.9;
  }

  &:checked {
    filter: none;
  }
`;
export const StyledLabel = styled.label`
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: ${props => (props.selectedItem ? '200px' : '180px')};
  height: ${props => (props.selectedItem ? '140px' : '120px')};
  transition: all 100ms ease-in;
  filter: ${props => (props.selectedItem ? 'none' : 'brightness(1.8) grayscale(1) opacity(0.7)')};

  &:hover {
    filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  }
`;
