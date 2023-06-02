import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, PREFIX} from '@env';
import {endpoints} from '../../shared/exporter';
import {setUser} from '../features/authSlice';

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
    console.log(authSlice);
    headers.set('Authorization', `Token ${authSlice?.user?.token}`);
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
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    // change password
    changePassword: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.changePassword}`,
        method: 'put',
        body: data,
      }),
    }),
    // forgot password
    forgotPassword: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.forgotPassword}`,
        method: 'post',
        body: data,
      }),
    }),
    // delete account
    deleteAccount: builder.mutation({
      query: (data, id) => ({
        url: `${PREFIX}${endpoints.signUp}/${id}`,
        method: 'delete',
        body: data,
        headers: customHeaders,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useDeleteAccountMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
} = AuthApis;
