import {
  GET_MY_PRODUCTS,
} from '../actions/myProducts';

export const INIT_STATE = [
  {
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
    min: 38.70,
    mean: 42.32,
    max: 53.99,
    sellerTheSameProduct: 2,
    'suggestion': 'capinha',
    stock_count: 21,
  },
  {
    productId: 'gfjkckbb56',
    name: 'Kit Power Bank Portátil + Carregador + Pen Drive + Cartão de Memória Micro SD , 8GB , Prata/Preto (Emb. contém 4un.) - Multilaser',
    stemName: 'Kit Power Bank Portátil + Carregador + Pen Drive + Cartão de Memória Micro SD , 8GB , Prata/Preto (Emb. contém 4un.) - Multilaser',
    categoryIds: [
      'ACCP',
    ],
    departmentIds: [
      'TE',
    ],
    currentPrice: 47.57,
    onSale: false,
    min: 37.00,
    mean: 48.32,
    max: 89.99,
    sellerTheSameProduct: 5,
    'suggestion': 'capinha',
    stock_count: 92,
  },
];

const myProducts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MY_PRODUCTS:
      return action.myProducts;
    default:
      return state;
  }
};

export default myProducts;
