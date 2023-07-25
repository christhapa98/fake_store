import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { brands, categories } from "@/constants/makeup.constants";
import { endpoints } from "@/constants/endpoints";

export const fetchMakeupProducs = createAsyncThunk(
    "makeupProducts",
    async (_: any, { rejectWithValue }) => {
        try {
            const response: any = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
);

// Create the makeupSlice
const makeupSlice = createSlice({
    name: "Makeup",
    initialState: {
        isLoading: false,
        error: {},
        data: {
            products: [],
            categories: categories,
            brands: brands,
        }
    },
    reducers: {
    },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchMakeupProducs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMakeupProducs.fulfilled, (state, action: any) => {
                var products = action.payload;
                state.data.products = products
                state.isLoading = false;
            })
            .addCase(fetchMakeupProducs.rejected, (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const makeypReducer = makeupSlice.reducer;
export const makeUpData = (state: RootState) => state.makeUp;

export default makeupSlice.reducer;


