import { apiSlice } from '../apiSlice'
import type { Product } from '../../../types'

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: (result) =>
        result
          ? [
            ...result.map((product) => ({
              type: 'Product' as const,
              id: product._id,
            })),
            { type: 'Product' as const, id: 'LIST' },
          ]
          : [{ type: 'Product' as const, id: 'LIST' }],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product' as const, id }],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
} = productsApi
