import {
  GET_PRODUCT,
} from '../actions/product';

export const INIT_STATE = {
  productId: 'hafd1gf6a6',
  name: 'Kit Power Bank 4000 mAh',
  stemName: 'Kit Power Bank 4000 mAh',
  categoryIds: [
    'TE',
  ],
  departmentIds: [
    'TE',
  ],
  currentPrice: 41.56,
  onSale: true,
  min: 38.79,
  mean: 42.32,
  max: 53.99,
  sellerTheSameProduct: 2,
};

const product = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default product;
