import React from 'react';
import PropTypes from 'prop-types';

import { isDesktop } from '../../utils';

import { StyledBadge } from './styles';

function Badge({ value }) {
  const isDesktopDevice = isDesktop();
  return <StyledBadge>{!isDesktopDevice && value}</StyledBadge>;
}

Badge.propTypes = {
  value: PropTypes.number,
};

export default Badge;
