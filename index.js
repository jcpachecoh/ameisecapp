import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import App from './src/root/App';
import store from './config/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './config/initializers/moment';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
