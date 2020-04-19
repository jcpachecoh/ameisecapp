import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import React from 'react';

import HomePage from '../../pages/HomePage';
import CatalogoPage from '../../pages/CatalogoPage';
import MalePage from '../../pages/MalePage';
import FemalePage from '../../pages/FemalePage';
import DotacionesPage from '../../pages/DotacionesPage';
import ContactoPage from '../../pages/ContactoPage';

const App = () => {
  return (
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
  );
};

export default App;
