import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_PRODUCTS, GET_PRODUCT } from '../store/products/actionTypes';
import {
  getProductsSuccess,
  getProductsFail,
  getProductSuccess,
  getProductFail
} from '../store/products/action'
import { fetchProduct, fetchProducts } from '../api';

function* onFetchProducts() {
  try {
    const response = yield call(fetchProducts);
    console.log(response);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(GET_PRODUCTS, onFetchProducts);
}

//fetch a single product -> for detail screen
function* onFetchProduct() {
  try {
    const response = yield call(fetchProduct);
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductFail())
  }
}

export function* watchFetchProduct() {
  yield takeLatest(GET_PRODUCT, onFetchProduct);
}