import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_PRODUCTS } from '../store/products/actionTypes';
import { getProductsSuccess, getProductsFail } from '../store/products/action'
import { fetchProducts } from '../api';

function* onFetchProducts() {
  try {
    const response = yield call(fetchProducts);
    console.log(response);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail());
  }
}

function* watchFetchProducts() {
  yield takeLatest(GET_PRODUCTS, onFetchProducts);
}

export default watchFetchProducts;