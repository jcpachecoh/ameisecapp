import React from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../utils/commonFunctions';
import { isDesktop } from '../../../utils';

import { StyledShopCarSummaryItem } from './styles';

function ShopCarSummaryItem({ value, type }) {
  const isDesktopDevice = isDesktop();
  return (
    <StyledShopCarSummaryItem isDesktopDevice={isDesktopDevice}>
      <div>{type}:</div>
      <b>{formatMoney(value)}</b>
    </StyledShopCarSummaryItem>
  );
}

ShopCarSummaryItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};

export default ShopCarSummaryItem;
