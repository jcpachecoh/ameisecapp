import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Title from '../../Title/Title';

import { StyledShopCar, StyledItemsContainer } from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';
import EmptyCar from './EmptyCar';

function ShopCar() {
  const history = useHistory();
  const articles = useSelector(state => state.shopCar.articles, shallowEqual);

  const getTotal = items => {
    return items.reduce((acc, cv) => {
      return acc + cv.price;
    }, 0);
  };
  const getIva = totalTemp => totalTemp * 0.19;
  const [total, setTotal] = useState(getTotal(articles));
  const [iva, setIva] = useState(getIva(total));

  const updateShopCar = items => {
    const newTotal = getTotal(items);
    const newIva = getIva(newTotal);
    setTotal(newTotal);
    setIva(newIva);
  };

  const handleShowShoppingCar = () => {
    history.push('/');
  };

  return (
    <StyledShopCar>
      {articles && articles.length ? (
        <>
          <Title value={'Carrito de compras'} />
          <hr />
          <StyledItemsContainer>
            {articles.map((item, idx) => {
              return <ShopCarItem item={item} key={idx} idx={idx} updateShopCar={updateShopCar} />;
            })}
          </StyledItemsContainer>
          <ShopCarSummary hideShopCar={handleShowShoppingCar} total={total} iva={iva} />
        </>
      ) : (
        <EmptyCar />
      )}
    </StyledShopCar>
  );
}

export default ShopCar;
