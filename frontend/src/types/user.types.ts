export interface UserInfo {
  _id: string
  name: string
  email: string
  isAdmin: boolean
  token: string
}

export interface UserProfile {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface UpdateProfileRequest {
  id: string
  name: string
  email: string
  password?: string
}
