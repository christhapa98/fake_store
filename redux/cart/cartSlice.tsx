import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
    cartItems: any, totalAmount: number
}

// Create the cartSlice
const cartSlice = createSlice({
    name: "Cart Items",
    initialState: {
        cartItems: [], totalAmount: 0
    } as CartState,
    reducers: {
        addCartItems(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
        },
    }
});

export const { addCartItems } = cartSlice.actions
export const cartReducer = cartSlice.reducer;

export const cartData = (state: RootState) => state.cartItems;

export default cartSlice.reducer;