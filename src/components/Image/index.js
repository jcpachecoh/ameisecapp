import React from 'react';
import PropTypes from 'prop-types';

import { StyledImg } from './styles';

function Image({ src, alt, name, size, highLight, onClick }) {
  return (
    <StyledImg size={size} highLight={highLight}>
      <img src={src} alt={alt} name={name} onClick={onClick} />
    </StyledImg>
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  highLight: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
