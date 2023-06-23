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

export const ContactApis = createApi({
   reducerPath: 'contactApis',
   baseQuery,
   endpoints: (builder) => ({
      // contactUs api
      contactUs: builder.mutation({
         query: (data) => ({
            url: `${PREFIX}${endpoints.contactUs}`,
            method: 'post',
            headers: customHeaders,
            body: data,
         }),
      }),

   }),
});

export const {
   useContactUsMutation
} = ContactApis;
