import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'

type ErrorData = {
  message?: string
}

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  if (!error) {
    return undefined
  }

  if ('status' in error) {
    if (typeof error.data === 'string') {
      return error.data
    }

    if (error.data && typeof (error.data as ErrorData).message === 'string') {
      return (error.data as ErrorData).message
    }
  }

  if ('message' in error) {
    return error.message || 'Something went wrong'
  }

  return 'Something went wrong'
}
