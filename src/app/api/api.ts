import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithZodValidation } from '@/utils/baseQueryWithZodValidation'

export const baseApi = createApi({
  reducerPath: 'todolistsApi',
  tagTypes: ['Todolist', 'Task'],
  baseQuery: baseQueryWithZodValidation(async (args, api, extraOptions) => {
    return fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL
    })(args, api, extraOptions)
  }),

  endpoints: () => ({})
})
