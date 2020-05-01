import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Title from '../../Title';

import { StyledShopCar, StyledItemsContainer } from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';
import EmptyCar from './EmptyCar';
import SignUpSelection from './SignUpSelection';
import Resume from './Resume';

function ShopCar() {
  const history = useHistory();
  const articles = useSelector(state => state.shopCar.articles, shallowEqual);

  const [shopState, setshopState] = useState('initial');

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

  const goToStep = step => {
    setshopState(step);
  };

  const handleShopCarState = () => {
    switch (shopState) {
      case 'initial':
        return (
          <>
            {articles && articles.length ? (
              <>
                <Title value={'Carrito de compras'} />
                <hr />
                <StyledItemsContainer>
                  {articles.map((item, idx) => {
                    return (
                      <ShopCarItem item={item} key={idx} idx={idx} updateShopCar={updateShopCar} />
                    );
                  })}
                </StyledItemsContainer>
                <ShopCarSummary
                  handleNextStep={() => goToStep('signup')}
                  hideShopCar={handleShowShoppingCar}
                  total={total}
                  iva={iva}
                />
              </>
            ) : (
              <EmptyCar />
            )}
          </>
        );
      case 'signup':
        return (
          <SignUpSelection
            backFn={() => goToStep('initial')}
            moveToResume={() => goToStep('resume')}
          />
        );
      case 'resume':
        return <Resume iva={iva} total={total} />;
      default:
        return null;
    }
  };

  return <StyledShopCar>{handleShopCarState()}</StyledShopCar>;
}

export default ShopCar;
