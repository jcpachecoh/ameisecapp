import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg } from './styles';

function Image({src, alt, name, onClick}) {
    return (
        <StyledImg>
            <img src={src} alt={alt} name={name} onClick={onClick} />
        </StyledImg>
    )
}

Image.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string
};

export default Image;
