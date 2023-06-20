import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, PREFIX} from '@env';
import {endpoints} from '../../shared/exporter';
import {setUser} from '../features/authSlice';

// Create the base query function with global headers
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Set your API base URL here

  prepareHeaders: async (headers, {getState}) => {
    const token = getState()?.authSlice?.user?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    return headers;
  },
});

export const AuthApis = createApi({
  reducerPath: 'authApis',
  tagTypes: ['User'],
  baseQuery,
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
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setUser(data));
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

    //updateUser
    updateUser: builder.mutation({
      query: data => ({
        url: `${PREFIX}${endpoints.updateUSer}`,
        method: 'put',
        body: data,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setUser(data));
      },
    }),
    // delete account
    deleteAccount: builder.mutation({
      query: (data, id) => ({
        url: `${PREFIX}${endpoints.signUp}/${id}`,
        method: 'delete',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useDeleteAccountMutation,
  useChangePasswordMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
} = AuthApis;
