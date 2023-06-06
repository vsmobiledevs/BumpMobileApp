/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PREFIX } from '@env';
import { endpoints } from '../../shared/exporter';
import { setUser } from '../features/authSlice';

// Define your custom headers
const customHeaders = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

// Create the base query function with global headers
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Set your API base URL here
  prepareHeaders: (headers, { getState }) => {
    const { authSlice } = getState();
    headers.set('Authorization', `Token ${authSlice?.user?.token}`);
  },
});

export const AuthApis = createApi({
  reducerPath: 'authApis',
  baseQuery,
  endpoints: (builder) => ({
    // create user
    createUser: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.signUp}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
    }),
    // login user
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.login}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          /* empty */
        }
      },
    }),
    // update user
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.updateUser}`,
        method: 'put',
        body: data,
        headers: customHeaders,
      }),
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          const { authSlice } = getState();
          const obj = { ...authSlice?.user };
          obj.name = data.name;
          obj.email = data.email;
          obj.profile_image = data.profile_image;
          dispatch(setUser(obj));
        } catch (error) {
          /* empty */
        }
      },
    }),
    // change password
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.changePassword}`,
        method: 'put',
        body: data,
      }),
    }),
    // forgot password
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.forgotPassword}`,
        method: 'post',
        body: data,
      }),
    }),
    // delete account
    deleteAccount: builder.mutation({
      query: ({ body, id }) => ({
        url: `${PREFIX}${endpoints.signUp}/${id}`,
        method: 'delete',
        body,
      }),
    }),
    // get privacy policy and terms & conditions
    termsAndPrivacy: builder.mutation({
      query: (key) => ({
        url: `${PREFIX}${endpoints.termsAndPrivacy}?name=${key}`,
        method: 'get',
        headers: customHeaders,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useTermsAndPrivacyMutation,
  useDeleteAccountMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
} = AuthApis;
