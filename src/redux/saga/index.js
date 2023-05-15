import {fork} from 'redux-saga/effects';

import {loginRequest} from './auth-saga/auth-sega';

export function* rootSaga() {
  yield fork(loginRequest);
}
