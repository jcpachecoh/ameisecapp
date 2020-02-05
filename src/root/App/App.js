import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../../pages/HomePage';
import CatalogoPage from '../../pages/CatalogoPage';
import MalePage from '../../pages/MalePage';
import FemalePage from '../../pages/FemalePage';
import DotacionesPage from '../../pages/DotacionesPage';
import ContactoPage from '../../pages/ContactoPage';

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Route exact path="/" component={HomePage} />
      <Route path="/catalogo" component={CatalogoPage} />
      <Route path="/hombre" component={MalePage} />
      <Route path="/dama" component={FemalePage} />
      <Route path="/dotaciones" component={DotacionesPage} />
      <Route path="/contacto" component={ContactoPage} />
    </BrowserRouter>
  );
};

export default App;
