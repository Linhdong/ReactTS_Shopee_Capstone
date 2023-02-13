import { SuccessResponse } from './utils.type'
import {} from './utils.type'
import { User } from './user.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expire: string
  user: User
}>
