import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  userInfo: null,
};
const authReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    // login states
    case TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userInfo: payload,
      };

    case TYPES.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userInfo: null,
      };

    default:
      return state;
  }
};
export default authReducer;
