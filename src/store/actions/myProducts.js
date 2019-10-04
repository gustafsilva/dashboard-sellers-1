export const GET_MY_PRODUCTS = 'GET_MY_PRODUCTS';

export const getMyProducts = (myProducts) => ({
  type: GET_MY_PRODUCTS,
  myProducts,
});
