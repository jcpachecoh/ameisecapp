import React from 'react';
import PropTypes from 'prop-types';

import { StyledImg } from './styles';

function Image({ src, alt, name, size, onClick }) {
  return (
    <StyledImg size={size}>
      <img src={src} alt={alt} name={name} onClick={onClick} />
    </StyledImg>
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
