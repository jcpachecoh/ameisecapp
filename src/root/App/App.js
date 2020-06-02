import React, { useEffect, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const HomePage = lazy(() => import('../../pages/HomePage'));
const CatalogoPage = lazy(() => import('../../pages/CatalogoPage'));
const MalePage = lazy(() => import('../../pages/MalePage'));
const DotacionesPage = lazy(() => import('../../pages/DotacionesPage'));
const ContactoPage = lazy(() => import('../../pages/ContactoPage'));
const NoMatchPage = lazy(() => import('../../pages/NoMatchPage'));
const ProductPage = lazy(() => import('../../pages/ProductPage'));
const CheckoutPage = lazy(() => import('../../pages/CheckoutPage'));
const TerminosPage = lazy(() => import('../../pages/TerminosPage'));
const Response = lazy(() => import('../../components/ShopCar/components/Response'));
const Confirmation = lazy(() => import('../../components/ShopCar/components/Confirmation'));

import { StyledBody } from './styles';

const trackingId = 'UA-35966965-1';

const App = () => {
  const displayShoppingCar = useSelector(state => state.shopCar.showShoppingCar);
  const articles = useSelector(state => state.shopCar.articles);
  const articlesLength = articles && articles.length;

  const shouldBeFixed = displayShoppingCar && articlesLength > 0;
  const history = createBrowserHistory();
  ReactGA.initialize(trackingId);

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
            <Route path="/response" component={Response} />
            <Route path="/checkout/confirmation" component={Confirmation} />
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
