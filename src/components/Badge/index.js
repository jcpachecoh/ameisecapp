import React from 'react';
import PropTypes from 'prop-types';

import { StyledBadge } from './styles';

function Badge({ value }) {
  return <StyledBadge>{value}</StyledBadge>;
}

Badge.propTypes = {
  value: PropTypes.number,
};

export default Badge;
