import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import cancelIcon from '../../../../public/assets/cancelIcon.png';
import Icon from '../../Icon';
import { reduxActions } from '../../../constants';

import { StyledShopCarItem } from './styles';
import ArticleName from './ArticleName';
import ArticlePrice from './ArticlePrice';
import ArticleImage from './ArticleImage';

function ShopCarItem({ item, idx }) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch({ payload: idx, type: reduxActions.DELETE_ITEM });
  };

  return (
    <>
      <StyledShopCarItem>
        <ArticleImage images={item.images} />
        <ArticleName name={item.name} size={item.size} />
        <ArticlePrice price={item.price} />
        <Icon image={cancelIcon} size={'32px'} onClick={deleteItem} />
      </StyledShopCarItem>
      <hr />
    </>
  );
}

ShopCarItem.propTypes = {
  idx: PropTypes.number,
  item: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        src: PropTypes.any,
      }),
    ),
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
  }),
};

export default ShopCarItem;
