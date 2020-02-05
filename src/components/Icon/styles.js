import styled from 'styled-components';

export const StyledIcon = styled.i`
    background: url(${props => props.image}) no-repeat;
    width: ${props => props.size};
    height: ${props => props.size};
    border: none;
    position: relative;
`;
