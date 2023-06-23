/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',

  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
