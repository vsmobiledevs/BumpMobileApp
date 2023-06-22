/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import { AuthApis } from '../api/auth';
import authSlice from './authSlice';
import { ContactApis } from '../api/contact';

const rootReducer = combineReducers({
  [AuthApis.reducerPath]: AuthApis.reducer,
  [ContactApis.reducerPath]: ContactApis.reducer,
  authSlice,
});

export default rootReducer;
