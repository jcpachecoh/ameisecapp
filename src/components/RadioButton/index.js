import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledRadioButton, StyledLabel } from './styles';

function RadioButton({ name, id, image, onClick, selectedItem, value }) {
  return (
    <Fragment>
      <StyledRadioButton type={'radio'} id={id} name={name} value={value} onClick={onClick} />
      <StyledLabel image={image} htmlFor={value} selectedItem={selectedItem} />
    </Fragment>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selectedItem: PropTypes.bool,
  value: PropTypes.string,
};

export default RadioButton;
