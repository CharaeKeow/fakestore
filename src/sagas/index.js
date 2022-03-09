import { all, fork } from 'redux-saga/effects';

import { watchFetchProduct, watchFetchProducts } from './productSagas';

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchProduct),
  ]);
}