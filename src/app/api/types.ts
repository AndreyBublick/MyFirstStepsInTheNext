import type { Nullable } from '@/app/types'

export type BaseResponse<T> = {
  info: InfoType
  results: T[]
}
type InfoType = {
  count: number
  pages: number
  next: Nullable<string>
  prev: Nullable<string>
}
