import { createSlice } from '@reduxjs/toolkit'

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartItems: cartItemsFromStorage },
    reducers: {
        addItem: (state, action) => {
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
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x.product !== action.payload
            )

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
    },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
