import React from 'react';
import PropTypes from 'prop-types';

import { StyledDescription } from './styles';

function Description({ value }) {
  return <StyledDescription>{value}</StyledDescription>;
}

Description.propTypes = {
  value: PropTypes.string,
};

export default Description;
