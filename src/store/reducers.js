import { combineReducers } from 'redux';

import productReducers from './products/reducers';

const rootReducer = combineReducers({
  productReducers,
});

export default rootReducer;