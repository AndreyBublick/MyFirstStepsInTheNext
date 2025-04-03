import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'todolistsApi',
  tagTypes: ['Todolist', 'Task'],
  baseQuery: async (args, api, extraOptions) => {
    /* handleError(api, result)*/

    return fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
      /*prepareHeaders: (headers) => {
                headers.set("API-KEY", import.meta.env.VITE_API_KEY)
                headers.set("Authorization", `Bearer ${localStorage.getItem(AUTH_TOKEN)}`)
            },*/
    })(args, api, extraOptions)
  },
  endpoints: () => ({}),
})
