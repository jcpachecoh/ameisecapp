import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import loadingIcon from './public/assets/loadingIcon.gif'
import store from './config/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './config/initializers/moment';
import Image from './src/components/Image';

const App = lazy(() => import('./src/root/App'));

const StyledLoading = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <Image src={loadingIcon} size={'128px'} />
    </StyledLoading>
  );
};

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
