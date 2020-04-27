import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledProductTitle } from './styles';

function ProductTitle({ title, textAlign }) {
  return <StyledProductTitle textAlign={textAlign}>{title}</StyledProductTitle>;
}

ProductTitle.propTypes = {
  textAlign: PropTypes.string,
  title: PropTypes.string,
};

export default ProductTitle;
