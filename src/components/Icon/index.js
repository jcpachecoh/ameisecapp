import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './styles';

function Icon({ image, size, onClick, dataUrl }) {
  return <StyledIcon onClick={onClick} image={image} size={size} data-url={dataUrl} />;
}

Icon.propTypes = {
  dataUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
};

export default Icon;
