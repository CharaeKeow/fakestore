import { all } from 'redux-saga/effects';

import { saga } from './productSagas';

export default function* rootSaga() {
  yield all([
    ...saga
  ]);
}