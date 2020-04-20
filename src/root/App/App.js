import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import { useSelector } from 'react-redux';
import React from 'react';

import HomePage from '../../pages/HomePage';
import CatalogoPage from '../../pages/CatalogoPage';
import MalePage from '../../pages/MalePage';
import FemalePage from '../../pages/FemalePage';
import DotacionesPage from '../../pages/DotacionesPage';
import ContactoPage from '../../pages/ContactoPage';

import { StyledBody } from './styles';

const App = () => {
  const displayShoppingCar = useSelector(state => state.shopCar.showShoppingCar);
  const articles = useSelector(state => state.shopCar.articles);
  const articlesLength = articles && articles.length;

  const shouldBeFixed = displayShoppingCar && articlesLength > 0;
  return (
    <StyledBody shouldBeFixed={shouldBeFixed}>
      <SnackbarProvider position="bottom-left">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalogo" component={CatalogoPage} />
            <Route path="/hombre" component={MalePage} />
            <Route path="/dama" component={FemalePage} />
            <Route path="/dotaciones" component={DotacionesPage} />
            <Route path="/contacto" component={ContactoPage} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </StyledBody>
  );
};

export default App;
