import {
  SET_CART,
  GET_CART
} from './actionTypes';

export const getCart = () => {
  return {
    type: GET_CART,
  }
};

export const setCart = (product) => {
  return {
    type: SET_CART,
    payload: product,
  }
}