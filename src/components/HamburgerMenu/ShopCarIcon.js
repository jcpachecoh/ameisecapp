import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OverlayModal from '../OverlayModal';
import shoppingcar from '../../../public/assets/shoppingcar.png';
import Badge from '../Badge';
import Icon from '../Icon';
import ShopCar from '../ShopCar/components/ShopCar';
import { reduxActions } from '../../constants';

import { StyledShopCar } from './styles';

function ShopCarIcon() {
  const showOverlay = useSelector(state => state.app.showItemDetails);
  const displayShoppingCar = useSelector(state => state.shopCar.showShoppingCar);
  const articles = useSelector(state => state.shopCar.articles);
  const dispatch = useDispatch();
  const articlesLength = articles && articles.length;

  const handleShowOverlay = useCallback(() => {
    dispatch({ payload: false, type: reduxActions.SHOW_ITEM_DETAILS });
  }, [showOverlay]);

  const handleShowShoppingCar = useCallback(() => {
    dispatch({ payload: !displayShoppingCar, type: reduxActions.SHOW_SHOPPING_CAR });
  }, [displayShoppingCar]);

  const openShopcar = () => {
    handleShowOverlay();
    handleShowShoppingCar();
  };

  return (
    <StyledShopCar>
      <Icon image={shoppingcar} size={'32px'} onClick={openShopcar} />
      {articlesLength > 0 && <Badge value={articlesLength} />}
      {articlesLength > 0 && (
        <OverlayModal showOverlay={displayShoppingCar} animationDirection={'animateright'}>
          <ShopCar />
        </OverlayModal>
      )}
    </StyledShopCar>
  );
}

export default ShopCarIcon;
