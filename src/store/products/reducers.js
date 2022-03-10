import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from './actionTypes'

//initial state
const initialState = {
  products: [],
  selectedProduct: {},
  loadingProducts: false,
  error: '',
}

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loadingProducts: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loadingProducts: false
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: "Error",
        loadingProducts: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: action.selectedProduct,
      }
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        error: "Error"
      }
    default:
      return state;
  }
}

export default productsReducers;