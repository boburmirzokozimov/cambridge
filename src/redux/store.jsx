import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'
import openSlice from './openSlice'
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        open: openSlice
    },
    middleware: getDefaultMiddleWare =>
        getDefaultMiddleWare().concat(apiSlice.middleware),
    devTools: true
})