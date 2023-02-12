import { ResponseApi } from './utils.type'
import {} from './utils.type'
import { User } from './user.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expire: string
  user: User
}>
