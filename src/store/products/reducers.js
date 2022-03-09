import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from './actionTypes'

//initial state
const initialState = {
  products: [],
  loadingProducts: false,
  error: '',
}

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loadingProducts: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loadingProducts: false
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: "Error",
        loadingProducts: false
      };
    default:
      return state;
  }
}

export default productReducers;