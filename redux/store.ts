
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { sessionReducer } from "./session/sessionSlice";

export const stores = configureStore({
    reducer: {
        products: productsReducer,
        session: sessionReducer
    }
});

// create types for state and dispatch
export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

