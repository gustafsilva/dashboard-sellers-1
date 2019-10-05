import { createStore } from 'redux';
import reducer from './reducers';
// import middleware from './middlewares';

// const store = createStore(reducer, middleware);
const store = createStore(reducer);

export default store;
