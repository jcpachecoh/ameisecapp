import { combineReducers } from 'redux';

import user from './user';
import app from './app';
import shopCar from './shopCar';

const reducers = combineReducers({
  app,
  shopCar,
  user,
});

export default reducers;
