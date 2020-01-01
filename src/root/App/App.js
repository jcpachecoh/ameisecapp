import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../../pages/HomePage';

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default App;
