import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    api.dispatch(logout())
  }
  return result
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Product', 'User', 'Order'],
  endpoints: () => ({}), // Endpoints injected in feature slices
})
