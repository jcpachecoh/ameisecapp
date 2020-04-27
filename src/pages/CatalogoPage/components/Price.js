import React from 'react';
import { PropTypes } from 'prop-types';

import { formatMoney } from '../../../utils/commonFunctions';

import { StyledPrice } from './styles';

function Price({ value, showIva }) {
  return (
    <StyledPrice>
      <b>${formatMoney(value)}</b>
      {showIva && <span className={'iva'}>Iva. Incluido</span>}
    </StyledPrice>
  );
}

Price.propTypes = {
  showIva: PropTypes.bool,
  value: PropTypes.number,
};

export default Price;
