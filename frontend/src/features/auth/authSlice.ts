import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserInfo } from '../../types'

interface AuthState {
  userInfo: UserInfo | null
}

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? (JSON.parse(localStorage.getItem('userInfo')!) as UserInfo)
  : null

const initialState: AuthState = {
  userInfo: userInfoFromStorage,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
