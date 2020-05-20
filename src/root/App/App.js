import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import HomePage from '../../pages/HomePage';
import CatalogoPage from '../../pages/CatalogoPage';
import MalePage from '../../pages/MalePage';
import DotacionesPage from '../../pages/DotacionesPage';
import ContactoPage from '../../pages/ContactoPage';
import NoMatchPage from '../../pages/NoMatchPage';
import ProductPage from '../../pages/ProductPage';
import CheckoutPage from '../../pages/CheckoutPage';
import TerminosPage from '../../pages/TerminosPages';

import { StyledBody } from './styles';

const trackingId = 'UA-35966965-1';

const App = () => {
  const displayShoppingCar = useSelector(state => state.shopCar.showShoppingCar);
  const articles = useSelector(state => state.shopCar.articles);
  const articlesLength = articles && articles.length;

  const shouldBeFixed = displayShoppingCar && articlesLength > 0;
  const history = createBrowserHistory();
  ReactGA.initialize(trackingId, { testMode: true });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <StyledBody shouldBeFixed={shouldBeFixed}>
      <SnackbarProvider position="bottom-left">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalogo" component={CatalogoPage} />
            <Route path="/hombre" component={MalePage} />
            <Route path="/dotaciones" component={DotacionesPage} />
            <Route path="/contacto" component={ContactoPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/terminos" component={TerminosPage} />
            <Route path="/producto/:category/:id" component={ProductPage} />
            <Route path={'*'} component={NoMatchPage} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </StyledBody>
  );
};

export default App;
