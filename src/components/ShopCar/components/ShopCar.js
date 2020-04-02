import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../../Title/Title';
import { reduxActions } from '../../../constants';

import { StyledShopCar, StyledItemsContainer } from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';

function ShopCar() {
  const articles = useSelector(state => state.shopCar.articles);
  const displayShoppingCar = useSelector(state => state.shopCar.showShoppingCar);
  const dispatch = useDispatch();

  const handleShowShoppingCar = useCallback(() => {
    dispatch({ payload: !displayShoppingCar, type: reduxActions.SHOW_SHOPPING_CAR });
  }, [displayShoppingCar]);

  return (
    <StyledShopCar>
      <Title value={'Carrito de compras'} />
      <hr />
      <StyledItemsContainer>
        {articles &&
          articles.map((item, idx) => {
            return <ShopCarItem item={item} key={idx} idx={idx} />;
          })}
      </StyledItemsContainer>
      <ShopCarSummary hideShopCar={handleShowShoppingCar} />
    </StyledShopCar>
  );
}

export default ShopCar;
