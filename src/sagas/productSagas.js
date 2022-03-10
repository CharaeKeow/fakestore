import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_PRODUCTS, } from '../store/products/actionTypes';
import {
  getProductsSuccess,
  getProductsFail,
} from '../store/products/action'
import { fetchProducts } from '../api';

function* onFetchProducts() {
  try {
    const response = yield call(fetchProducts);
    //console.log(response);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail());
  }
}

//fetch a single product -> for detail screen
/*
function* onFetchProduct(productId) {
  try {
    const response = yield call(fetchProduct, productId);
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductFail())
  }
}
*/

export const saga = [
  takeLatest(GET_PRODUCTS, onFetchProducts)
]