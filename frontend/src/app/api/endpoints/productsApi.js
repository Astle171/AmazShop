import { apiSlice } from '../apiSlice'

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: (result) =>
        result
          ? [
              ...result.map((product) => ({
                type: 'Product',
                id: product._id,
              })),
              { type: 'Product', id: 'LIST' },
            ]
          : [{ type: 'Product', id: 'LIST' }],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
} = productsApi
