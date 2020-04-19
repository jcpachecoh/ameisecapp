import React from 'react';
import PropTypes from 'prop-types';

import { isDesktop } from '../../utils';

import { StyledInputText } from './styles';

function InputText({ name, placeholder, value, width, onChange, type }) {
  const isDesktopDevice = isDesktop();
  return (
    <StyledInputText
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isDesktopDevice={isDesktopDevice}
      width={width}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  value: PropTypes.string,
  width: PropTypes.string,
};

export default InputText;
