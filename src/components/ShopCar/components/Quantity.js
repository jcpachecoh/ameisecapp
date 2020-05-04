import React from 'react';
import PropTypes from 'prop-types';

export default function Quantity({ onChangeValue, value }) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <select onChange={onChangeValue} value={value}>
      {items.map((item, idx) => {
        return (
          <option value={item} key={idx}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

Quantity.propTypes = {
  onChangeValue: PropTypes.func,
  value: PropTypes.number,
};
