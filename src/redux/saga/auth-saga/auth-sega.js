import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';
import {loginUser} from '../../../shared/services/AuthService';
import {responseValidator} from '../../../shared/utilities/helper';

// *************Login Sega**************
export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login(params) {
  try {
    const response = yield loginUser(params?.params);
    console.log(response);
    if (response?.data) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      params?.cbFailure(res);
      console.log('==============login failed======================');
      console.log(res);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('Resource not found:', error.response.data);
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      let msg = responseValidator(
        error?.response?.status,
        error?.response?.data,
      );
      params?.cbFailure(msg);
    }
  }
}
