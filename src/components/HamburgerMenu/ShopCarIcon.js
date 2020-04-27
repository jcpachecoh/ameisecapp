import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import shoppingcar from '../../../public/assets/shoppingcar.png';
import Badge from '../Badge';
import Icon from '../Icon';

import { StyledShopCar } from './styles';

function ShopCarIcon({ isDesktop }) {
  const articles = useSelector(state => state.shopCar.articles);
  const articlesLength = articles && articles.length;
  const history = useHistory();

  const openShopcar = () => {
    if (articlesLength === 0) {
      return;
    }
    history.push('/checkout/');
  };

  return (
    <StyledShopCar isDesktop={isDesktop}>
      <Icon image={shoppingcar} size={'32px'} onClick={openShopcar} />
      {articlesLength > 0 && <Badge value={articlesLength} />}
    </StyledShopCar>
  );
}

ShopCarIcon.propTypes = {
  isDesktop: PropTypes.bool,
};
export default ShopCarIcon;
