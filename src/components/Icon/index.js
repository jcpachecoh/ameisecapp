import React from 'react'
import PropTypes from 'prop-types';
import { StyledIcon } from './styles';

function Icon({ image, size, onClick }) {
    return (
        <StyledIcon onClick={onClick} image={image} size={size} />
    )
}

Icon.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default Icon;
