import {
  GET_CART,
  SET_CART
} from './actionTypes';

const initialState = {
  cart: [],
}

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state
      };
    case SET_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      }
    default:
      return state;
  }
}

export default cartReducers;