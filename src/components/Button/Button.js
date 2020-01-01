import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export function Button({ onClick, value, type }) {
  return (
    <StyledButton onClick={onClick} type={type}>
    {value}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Button;
