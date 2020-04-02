import React from 'react';
import PropTypes from 'prop-types';

import { StyledInputText } from './styles';

function InputText({ name, placeholder, value, onChange, type }) {
  return (
    <StyledInputText
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  value: PropTypes.string,
};

export default InputText;
