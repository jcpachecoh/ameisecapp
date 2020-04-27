import React from 'react';
import PropTypes from 'prop-types';

export default function Quantity({ onChangeValue, value }) {
  return <input onChange={onChangeValue} type={'number'} value={value} />;
}

Quantity.propTypes = {
  onChangeValue: PropTypes.func,
  value: PropTypes.number,
};
