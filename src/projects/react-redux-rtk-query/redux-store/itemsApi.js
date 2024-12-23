import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/fake-items";

// API slice
export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Items"], // Tags for cache invalidation
  endpoints: (builder) => ({
    getItems: builder.query({
      //   query: () => "/",
      query: () => ({
        url: "/",
      }),
      providesTags: ["Items"], // cache invalidation tag
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),
    updatedItem: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useDeleteItemMutation,
  useCreateItemMutation,
  useUpdatedItemMutation,
} = itemsApi;

console.log("itemsApi", itemsApi);
