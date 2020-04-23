import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './styles';

export function Title({ value, fontSize }) {
  return <StyledTitle fontSize={fontSize}>{value}</StyledTitle>;
}

Title.propTypes = {
  fontSize: PropTypes.string,
  value: PropTypes.string,
};

export default Title;
