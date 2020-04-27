import React from 'react';
import PropTypes from 'prop-types';

import { StyledColors, StyledColor } from './styles';

function ProductColors({ colors, onSelectColor, selected }) {
  return (
    <StyledColors>
      {colors?.map(item => {
        return (
          <StyledColor
            size={'32px'}
            name={item.color}
            colorHexa={item.colorHexa}
            onClick={onSelectColor}
            data-color={item.color}
            selected={selected === item.color}
          />
        );
      })}
    </StyledColors>
  );
}

ProductColors.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      colorHexa: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  onSelectColor: PropTypes.func,
  selected: PropTypes.string,
};

export default ProductColors;
