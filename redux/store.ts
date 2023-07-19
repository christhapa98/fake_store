
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { sessionReducer } from "./session/sessionSlice";
import { cartReducer } from "./cart/cartSlice";

export const stores = configureStore({
    reducer: {
        session: sessionReducer,
        cartItems: cartReducer
    }
});

// create types for state and dispatch
export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

