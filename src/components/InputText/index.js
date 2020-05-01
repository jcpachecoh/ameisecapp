import React from 'react';
import PropTypes from 'prop-types';

import { isDesktop } from '../../utils';

import { StyledInputText, StyledLabel, StyledErrorLabel } from './styles';

function InputText({ errorLabel, label, name, placeholder, value, width, onChange, type }) {
  const isDesktopDevice = isDesktop();
  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      {errorLabel && <StyledErrorLabel>{errorLabel}</StyledErrorLabel>}
      <StyledInputText
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isDesktopDevice={isDesktopDevice}
        width={width}
      />
    </>
  );
}

InputText.propTypes = {
  errorLabel: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  value: PropTypes.string,
  width: PropTypes.string,
};

export default InputText;
