import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Button from '../../Button';

import ShopCarSummaryItem from './ShopCarSummaryItem';
import { StyledShopCarSummary } from './styles';

function ShopCarSummary({ hideShopCar }) {
  const articles = useSelector(state => state.shopCar.articles);
  const total = articles.reduce((acc, cv) => {
    return acc + cv.price;
  }, 0);
  return (
    <StyledShopCarSummary>
      <ShopCarSummaryItem value={total} type={'SubTotal'} />
      <ShopCarSummaryItem value={0} type={'Envio'} />
      <ShopCarSummaryItem value={total} type={'Total'} />
      <Button value={'Proceder Pago'} />
      <Button value={'Continuar Comprando'} type={'secondary'} onClick={hideShopCar} />
    </StyledShopCarSummary>
  );
}

ShopCarSummary.propTypes = {
  hideShopCar: PropTypes.func,
};

export default ShopCarSummary;
