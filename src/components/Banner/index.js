import React from 'react';
import { PropTypes } from 'prop-types';

import { StylesBanner } from './styles';

export default function Banner({ bgImage, children }) {
  return <StylesBanner background={bgImage}>{children}</StylesBanner>;
}

Banner.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
