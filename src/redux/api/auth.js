import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, PREFIX} from '@env';
import {endpoints} from '../../shared/exporter';

// Define your custom headers
const customHeaders = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

// Create the base query function with global headers
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Set your API base URL here
  prepareHeaders: (headers, {getState}) => {
    const {authSlice} = getState();
    headers.set('authorization', authSlice?.user?.token);
  },
});

export const AuthApis = createApi({
  reducerPath: 'authApis',

  baseQuery,

  endpoints: builder => ({
    // create user
    createUser: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.signUp}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
    }),
    // login user
    loginUser: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.login}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
      transformResponse: result => result,
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
