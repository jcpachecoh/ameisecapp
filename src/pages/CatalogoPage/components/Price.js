import React from 'react';
import { PropTypes } from 'prop-types';

import { formatMoney } from '../../../utils/commonFunctions';

import { StyledPrice } from './styles';

function Price({ value }) {
  return <StyledPrice>${formatMoney(value)}</StyledPrice>;
}

Price.propTypes = {
  value: PropTypes.number,
};

export default Price;
