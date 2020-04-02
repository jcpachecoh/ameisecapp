import React from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../utils/commonFunctions';

import { StyledShopCarSummaryItem } from './styles';

function ShopCarSummaryItem({ value, type }) {
  return (
    <StyledShopCarSummaryItem>
      <div>{type}:</div>
      <b>{formatMoney(value)}</b>
    </StyledShopCarSummaryItem>
  );
}

ShopCarSummaryItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

export default ShopCarSummaryItem;
