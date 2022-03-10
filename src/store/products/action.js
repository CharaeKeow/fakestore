import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
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
    payload: products
  };
};

export const getProductsFail = () => {
  return {
    type: GET_PRODUCTS_FAIL,
  };
};

export const getProduct = (selectedProduct) => {
  return {
    type: GET_PRODUCT,
    payload: selectedProduct,
  }
};

export const getProductSuccess = (selectedProduct) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: selectedProduct,
  };
};

export const getProductFail = () => {
  return {
    type: GET_PRODUCT_FAIL,
  };
};