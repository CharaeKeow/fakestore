import { all, fork } from 'redux-saga/effects';

import watchFetchProducts from './productSagas';

export default function* rootSaga() {
  yield all([fork(watchFetchProducts)]);
}