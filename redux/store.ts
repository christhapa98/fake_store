
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { sessionReducer } from "./session/sessionSlice";
import { cartReducer } from "./cart/cartSlice";
import { makeypReducer } from "./makeup/makeupSlice";

export const stores = configureStore({
    reducer: {
        session: sessionReducer,
        cartItems: cartReducer,
        makeUp: makeypReducer
    }
});

// create types for state and dispatch
export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

