import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../data/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
