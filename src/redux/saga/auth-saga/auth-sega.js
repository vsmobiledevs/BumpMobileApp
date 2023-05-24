// import {loginUser} from '../../../shared/service/AuthService';
import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../actions/types';

// *************Login Sega**************
export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
// function* login(params) {
//   try {
//     const res = yield loginUser(params?.params);
//     if (res.data) {
//       yield put({
//         type: types.LOGIN_REQUEST_SUCCESS,
//         payload: res.data,
//       });
//       yield put({
//         type: types.GET_PROFILE_SUCCESS,
//         payload: res.data?.user,
//       });

//       params?.cbSuccess(res.data);
//     } else {
//       yield put({
//         type: types.LOGIN_REQUEST_FAILURE,
//         payload: null,
//       });
//       params?.cbFailure(res?.data);
//       console.log('==============login failed======================');
//       console.log(res?.data);
//       console.log('====================================');
//     }
//   } catch (error) {
//     yield put({
//       type: types.LOGIN_REQUEST_FAILURE,
//       payload: null,
//     });
//     // let msg = responseValidator(error?.response?.status, error?.response?.data);
//     // params?.cbFailure(msg);
//   }
// }
