import styled from 'styled-components';

export const StyledIcon = styled.i`
    background: url(${props => props.image}) no-repeat;
    width: ${props => props.size === 'small' ? '32px' : '64px'};
    height: ${props => props.size === 'small' ? '32px' : '64px'};
    border: none;
    position: relative;
`;
