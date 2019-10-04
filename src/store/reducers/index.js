import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import myProducts from './myProducts';

const reducers = combineReducers({
  products,
  product,
  myProducts,
});

export default reducers;
