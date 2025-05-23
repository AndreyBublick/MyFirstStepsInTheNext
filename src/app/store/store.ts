import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '@/app/api/api'
import {appSlice} from "@/app/appSlice";


export const store = configureStore({
  reducer: {
    /* [appSlice.name]: appReducer,*/
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.reducerPath]:appSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

