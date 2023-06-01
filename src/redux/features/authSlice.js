import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',

  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: () => initialState,
  },
});

export const {logout, login} = authSlice.actions;

export default authSlice.reducer;
