import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useGetData } from "@/hooks/useApi";

export const fetchAllProducts = createAsyncThunk(
    "products",
    async (_: any, { rejectWithValue }) => {
        try {
            const { data, error }: any = await useGetData("")
            if (data) {
                return data;
            }
            return error;

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        error: {},
        data: []
    },
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action: any) => {
                state.isLoading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const productsReducer = productSlice.reducer;
export const productData = (state: RootState) => state.products.data;
