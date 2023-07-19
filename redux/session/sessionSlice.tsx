import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface session { token: string | null }

// Create the sessionSlice
const sessionSlices = createSlice({
    name: "Session",
    initialState: {
        session: null, token: null, authHeader: null
    } as session,
    reducers: {
        clearSession(state) {
            state.token = null;
            localStorage.clear();
        },
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem("fakeStoreToken", action.payload);
        },
        checkSession(state) {
            const token = localStorage.getItem("fakeStoreToken");
            state.token = token;
        }
    }
});

export const { clearSession, setToken, checkSession } = sessionSlices.actions
export const sessionReducer = sessionSlices.reducer;

export const presistSessionData = (state: RootState) => state.session;

export default sessionSlices.reducer;