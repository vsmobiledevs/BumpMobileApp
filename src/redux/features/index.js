import {combineReducers} from 'redux';
import {AuthApis} from '../api/auth';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  [AuthApis.reducerPath]: AuthApis.reducer,
  authSlice,
});

export default rootReducer;
