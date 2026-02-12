import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, CartState } from '../../types'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? (JSON.parse(localStorage.getItem('cartItems')!) as CartItem[])
  : []

const initialState: CartState = {
  cartItems: cartItemsFromStorage,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload
      const existIndex = state.cartItems.findIndex(
        (x) => x.product === item.product
      )

      if (existIndex !== -1) {
        state.cartItems[existIndex] = item
      } else {
        state.cartItems.push(item)
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      )

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
