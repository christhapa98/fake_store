import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "../store";

interface session {
    token: string | null,
}

// Create the sessionSlice
const sessionSlices = createSlice({
    name: "Session",
    initialState: {
        session: null, token: null, authHeader: null
    } as session,
    reducers: {
        clearSession(state) {
            state.token = null;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
    }
});

const persistedSessionReducer = persistReducer(
    {
        key: "Session",
        storage: storage,
    },
    sessionSlices.reducer
);

export const { clearSession, setToken } = sessionSlices.actions
export const sessionReducer = persistedSessionReducer;

export const presistSessionData = (state: RootState) => state.session;

export default sessionSlices.reducer;