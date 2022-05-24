import { createSlice, nanoid } from '@reduxjs/toolkit'
import { useSession } from 'next-auth/react'

const initialState = {
  cart: [],
}

{
  typeof window !== 'undefined' &&
    (localStorage.getItem('cart')
      ? (initialState.cart = JSON.parse(localStorage.getItem('cart')))
      : (initialState.cart = []))
}

export const subTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.cart.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
      prepare(id, title, description, price, image) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            price,
            image,
          },
        }
      },
    },
    removeFromCart: {
      reducer(state, action) {
        const itemId = action.payload
        const newCartItems = state.cart.filter((item) => item.id !== itemId)

        state.cart = newCartItems
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
    },
    emptyCart: {
      reducer(state, action) {
        state.cart = []
        localStorage.setItem('cart', JSON.stringify(state.cart))
      },
    },
  },
})

export const allCartData = (state) => state.cart

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer
