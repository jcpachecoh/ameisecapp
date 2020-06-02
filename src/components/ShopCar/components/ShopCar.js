import React, { useState, lazy, Fragment } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Title from '../../Title';

import { StyledShopCar, StyledItemsContainer } from './styles';

const ShopCarItem = lazy(() => import('./ShopCarItem'));
const ShopCarSummary = lazy(() => import('./ShopCarSummary'));
const EmptyCar = lazy(() => import('./EmptyCar'));
const SignUpSelection = lazy(() => import('./SignUpSelection'));
const Resume = lazy(() => import('./Resume'));
const Summary = lazy(() => import('./Summary'));

function ShopCar() {
  const history = useHistory();
  const articles = useSelector(state => state.shopCar.articles, shallowEqual);
  const isLogged = localStorage.getItem('isLogged');

  const [shopState, setshopState] = useState('initial');
  const [orderData, setOrderData] = useState(null);

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
    if (step === 'signup' && isLogged) {
      setshopState('resume');
    } else {
      setshopState(step);
    }
  };

  const goToSummary = orderData => {
    setOrderData(orderData);
    goToStep('summary');
  };
  const handleShopCarState = () => {
    switch (shopState) {
      case 'initial':
        return (
          <Fragment>
            {articles && articles.length ? (
              <Fragment>
                <Title value={'Carrito de compras'} />
                <hr />
                <StyledItemsContainer>
                  {articles.map((item, idx) => {
                    return (
                      <ShopCarItem
                        item={item}
                        key={idx}
                        idx={idx}
                        updateShopCar={updateShopCar}
                        showDelete
                      />
                    );
                  })}
                </StyledItemsContainer>
                <ShopCarSummary
                  handleNextStep={() => goToStep('signup')}
                  hideShopCar={handleShowShoppingCar}
                  total={total}
                  iva={iva}
                />
              </Fragment>
            ) : (
              <EmptyCar />
            )}
          </Fragment>
        );
      case 'signup':
        return (
          <SignUpSelection
            backFn={() => goToStep('initial')}
            moveToResume={() => goToStep('resume')}
          />
        );
      case 'resume':
        return (
          <Resume
            iva={iva}
            total={total}
            backFn={() => goToStep('initial')}
            goToSummary={goToSummary}
          />
        );
      case 'summary':
        return <Summary orderData={orderData} />;
      default:
        return null;
    }
  };

  return <StyledShopCar>{handleShopCarState()}</StyledShopCar>;
}

export default ShopCar;
