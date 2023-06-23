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

export const SearchApi = createApi({
  reducerPath: 'searchApis',
  baseQuery,
  endpoints: (builder) => ({
    // google search
    googleSearch: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.googleSearch}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
    }),
    // get shortcuts
    getShortCuts: builder.mutation({
      query: () => ({
        url: `${PREFIX}${endpoints.createShortCut}`,
        method: 'get',
        headers: customHeaders,
      }),
    }),
    // create shortcut
    createShortCut: builder.mutation({
      query: (data) => ({
        url: `${PREFIX}${endpoints.createShortCut}`,
        method: 'post',
        headers: customHeaders,
        body: data,
      }),
    }),

    // update shortcut
    updateShortCuts: builder.mutation({
      query: ({ body, id }) => ({
        url: `${PREFIX}${endpoints.createShortCut}/${id}`,
        method: 'put',
        body,
        headers: customHeaders,
      }),
    }),

    // delete shortcut
    deleteShortCut: builder.mutation({
      query: ({ id }) => ({
        url: `${PREFIX}${endpoints.createShortCut}/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useGoogleSearchMutation,
  useCreateShortCutMutation,
  useGetShortCutsMutation,
  useDeleteShortCutMutation,
  useUpdateShortCutsMutation,
} = SearchApi;
