import React from 'react';
import PropTypes from 'prop-types';

import { isDesktop } from '../../utils';

import { StyledButton } from './styles';

export function Button({ onClick, value, type, width, zIndex }) {
  const isDesktopDevice = isDesktop();
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      zIndex={zIndex}
      isDesktopDevice={isDesktopDevice}
      width={width}>
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  zIndex: PropTypes.number,
};

export default Button;
