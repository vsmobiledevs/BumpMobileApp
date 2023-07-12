/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PREFIX } from '@env';
import { endpoints } from '../../shared/exporter';

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

export const PaymentApis = createApi({
  reducerPath: 'PaymentApis',
  baseQuery,
  endpoints: (builder) => ({
    // add card api
    addCard: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.addCard}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
    }),
    // get all cards api
    getAllCards: builder.mutation({
      query: () => ({
        url: `${PREFIX}${endpoints.addCard}`,
        method: 'get',
        headers: customHeaders,
      }),
    }),
    // delete card api
    deleteCard: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.deleteCard}`,
        method: 'delete',
        headers: customHeaders,
        body: data,
      }),
    }),
  }),
});

export const { useAddCardMutation, useGetAllCardsMutation, useDeleteCardMutation } = PaymentApis;
