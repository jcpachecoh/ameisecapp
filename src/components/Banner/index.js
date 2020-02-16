import React from 'react';
import { PropTypes } from 'prop-types';

import { StylesBanner, StyledOverlay } from './styles';

function Banner({ bgImage, children }) {
  return (
    <StylesBanner background={bgImage}>
      <StyledOverlay />
      {children}
    </StylesBanner>
  );
}

Banner.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Banner;
