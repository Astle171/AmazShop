export interface CartItem {
    product: string // Product ID
    name: string
    image: string
    price: number
    countInStock: number
    qty: number
}

export interface CartState {
    cartItems: CartItem[]
}
