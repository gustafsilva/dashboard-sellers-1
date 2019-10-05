import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import myProducts from './myProducts';
import suggestions from './suggestions';

const reducers = combineReducers({
  products,
  product,
  myProducts,
  suggestions,
});

export default reducers;
