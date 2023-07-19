import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
    cartItems: any, totalAmount: number
}

const getTotalAmount = (products: any): number => {
    const totalValue = products.reduce((accumulator: any, item: any) => {
        return accumulator + item.quantity * item.price;
    }, 0);
    return totalValue;
}

// Create the cartSlice
const cartSlice = createSlice({
    name: "Cart Items",
    initialState: {
        cartItems: [],
        totalAmount: 0
    } as CartState,
    reducers: {
        addCartItems(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
            state.totalAmount = getTotalAmount(state.cartItems);
        },
        removeCartItem(state, action) {
            const newCartItems = state.cartItems;
            const newData = newCartItems.filter((item: any) => item.id !== action.payload)
            state.cartItems = newData;
            state.totalAmount = getTotalAmount(state.cartItems);
        },
        updateQuantity(state, action) {
            const id = action.payload;
            const newCartItems = state.cartItems;
            console.log(id, newCartItems)
            const updatedArray = newCartItems.map((item: any) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            state.cartItems = updatedArray;
            state.totalAmount = getTotalAmount(state.cartItems);
        }
    }
});

export const { addCartItems, removeCartItem, updateQuantity } = cartSlice.actions
export const cartReducer = cartSlice.reducer;

export const cartData = (state: RootState) => state.cartItems;

export default cartSlice.reducer; 