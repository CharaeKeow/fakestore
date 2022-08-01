import { combineReducers } from 'redux';

import productReducers from './products/reducers';
import cartReducers from './carts/reducer';

const rootReducer = combineReducers({
  productReducers,
  cartReducers
});

export default rootReducer;