import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from './actionTypes';

//define the actions
export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products: products
  };
};

export const getProductsFail = () => {
  return {
    type: GET_PRODUCTS_FAIL,
  };
};