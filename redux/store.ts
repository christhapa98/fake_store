
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const stores = configureStore({
    reducer: rootReducer
});

// create types for state and dispatch
export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch

