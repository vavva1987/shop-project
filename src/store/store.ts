import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        productsLikeState: likeSlice,
        productInCart: cartSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
