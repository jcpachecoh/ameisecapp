import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import cancelIcon from '../../../../public/assets/cancelIcon.png';
import Icon from '../../Icon';
import { reduxActions } from '../../../constants';

import { StyledShopCarItem } from './styles';
import ArticleName from './ArticleName';
import ArticlePrice from './ArticlePrice';
import ArticleImage from './ArticleImage';
import Quantity from './Quantity';

function ShopCarItem({ item, idx, updateShopCar }) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.shopCar.articles);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);
  let tempArticles = articles;
  const onChangeValue = e => {
    const quantity = e.target.value;
    if (quantity === 0) {
      return;
    }
    const newPrice = item.priceUnt * quantity;
    const newItem = { ...item, price: newPrice, quantity };
    const index = articles.findIndex(obj => obj.id === item.id);
    tempArticles.splice(index, 1, newItem);
    setPrice(newPrice);
    setQuantity(quantity);
    dispatch({ payload: tempArticles, type: reduxActions.UPDATE_QUANTITY });
    updateShopCar(tempArticles);
  };

  const deleteItem = () => {
    dispatch({ payload: idx, type: reduxActions.DELETE_ITEM });
  };

  return (
    <>
      <StyledShopCarItem>
        <ArticleImage images={item.images} />
        <ArticleName name={item.name} size={item.size} color={item.color} />
        <ArticlePrice price={price} />
        <Quantity value={quantity} onChangeValue={onChangeValue} />
        <Icon image={cancelIcon} size={'32px'} onClick={deleteItem} />
      </StyledShopCarItem>
      <hr />
    </>
  );
}

ShopCarItem.propTypes = {
  idx: PropTypes.number,
  item: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.any,
      }),
    ),
    name: PropTypes.string,
    price: PropTypes.number,
    priceUnt: PropTypes.number,
    quantity: PropTypes.number,
    size: PropTypes.string,
  }),
  updateShopCar: PropTypes.func,
};

export default ShopCarItem;
