import authReducer from './auth-reducers/auth-reducer';
import * as types from '../actions/types';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === types.LOGOUT_REQUEST_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
