import React from 'react';
import PropTypes from 'prop-types';

import { StyledDropdown } from './styles';

function Dropdown({ items, onSelectSize }) {
  return (
    <StyledDropdown onChange={onSelectSize}>
      <option value={'--'}>Seleccione una talla</option>
      {items.map((item, idx) => {
        return (
          <option value={item.size} key={idx}>
            {item.size}
          </option>
        );
      })}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    }),
  ),
  onSelectSize: PropTypes.func,
};

export default Dropdown;
