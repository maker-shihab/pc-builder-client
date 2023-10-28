import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (name) => `products/?category=${name}`,
    }),
    postComment: builder.mutation({
      query: (data) => {
        const { id, ...bodyData } = data;
        // console.log(data);
        // console.log(`products/?category=${name}`);
        return {
          url: `products/comment/${id}`,
          method: "POST",
          body: bodyData,
        };
      },
    }),
  }),
});
export const { useGetProductsByCategoryQuery, usePostCommentMutation } =
  productApi;
