import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextArea } from './styles';

function TextArea({ label, placeholder }) {
  return (
    <StyledTextArea>
      <label>{label}</label>
      <textarea placeholder={placeholder} cols="30" rows="5" />
    </StyledTextArea>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
