import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

import ShopCarSummaryItem from './ShopCarSummaryItem';
import { StyledShopCarSummary } from './styles';

function ShopCarSummary({ handleNextStep, hideShopCar, total, iva }) {
  return (
    <StyledShopCarSummary>
      <ShopCarSummaryItem value={total} type={'SubTotal'} />
      <ShopCarSummaryItem value={iva} type={'Iva'} />
      <ShopCarSummaryItem value={0} type={'Envio'} />
      <ShopCarSummaryItem value={total} type={'Total'} />
      {handleNextStep && <Button value={'Proceder Pago'} width={'70%'} onClick={handleNextStep} />}
      {hideShopCar && (
        <Button
          value={'Continuar Comprando'}
          type={'secondary'}
          onClick={hideShopCar}
          width={'70%'}
        />
      )}
    </StyledShopCarSummary>
  );
}

ShopCarSummary.propTypes = {
  handleNextStep: PropTypes.func,
  hideShopCar: PropTypes.func,
  iva: PropTypes.number,
  total: PropTypes.number,
};

export default ShopCarSummary;
