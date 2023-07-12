/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import { AuthApis } from '../api/auth';
import authSlice from './authSlice';
import { SearchApi } from '../api/search';
import { ContactApis } from '../api/contact';
import { PaymentApis } from '../api/payments';

const rootReducer = combineReducers({
  [AuthApis.reducerPath]: AuthApis.reducer,
  [SearchApi.reducerPath]: SearchApi.reducer,
  [ContactApis.reducerPath]: ContactApis.reducer,
  [PaymentApis.reducerPath]: PaymentApis.reducer,
  authSlice,
});

export default rootReducer;
