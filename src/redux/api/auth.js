import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, PREFIX} from '@env';
import {endpoints} from '../../shared/exporter';

export const AuthApis = createApi({
  reducerPath: 'authApis',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const {authSlice} = getState();
      headers.set('authorization', authSlice?.user?.token);
      return headers;
    },
  }),

  endpoints: builder => ({
    // create user
    createUser: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.signUp}`,
        method: 'post',
        body: data,
      }),
    }),
    // login user
    loginUser: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.login}`,
        method: 'post',
        body: data,
      }),
    }),
    // change password
    changePassword: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.changePassword}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
} = AuthApis;
