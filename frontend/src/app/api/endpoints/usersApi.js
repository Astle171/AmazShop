import { apiSlice } from '../apiSlice'
import { setCredentials } from '../../../features/auth/authSlice'

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials(data))
        } catch (error) {
          // no-op: handled by component
        }
      },
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: 'users',
        method: 'POST',
        body: payload,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials(data))
        } catch (error) {
          // no-op: handled by component
        }
      },
    }),
    getUserProfile: builder.query({
      query: () => 'users/profile',
      providesTags: ['User'],
    }),
    updateUserProfile: builder.mutation({
      query: (payload) => ({
        url: 'users/profile',
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials(data))
        } catch (error) {
          // no-op: handled by component
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = usersApi
