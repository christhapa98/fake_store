import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

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
            categories: [
                { title: "pencil", image: "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769" },
                { title: "lipstick", image: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076" },
                { title: "liquid", image: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwcd8987df/ProductImages/Eyes/Two_Timer_Dual_Ended_Eyeliner/twotimerdualendedeyeliner_main.jpg?sw=390&sh=390&sm=fit" },
                { title: "powder", image: "https://d3t32hsnjxo7q6.cloudfront.net/i/a20f3622d08d7b87492ca0af0319bf73_ra,w158,h184_pa,w158,h184.jpg" },
                { title: "lip_gloss", image: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw063995a2/ProductImages/2017/Lips/Luv_Out_Loud_Liquid_Lipstick/luvoutloudliquidlipstick_main.jpg?sw=390&sh=390&sm=fit" },
                { title: "gel", image: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw62a7d3b0/ProductImages/2016/Eyes/Cosmic_Gel_Liner/800897016364_cosmicgelliner_interstellar_main.jpg?sw=390&sh=390&sm=fit" },
                { title: "cream", image: "https://d3t32hsnjxo7q6.cloudfront.net/i/ad55adbfdae0bb8adfe72bcbc41893ac_ra,w158,h184_pa,w158,h184.jpg" },
                { title: "palette", image: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_60680_388x396_0.jpg" },
                { title: "concealer", image: "https://static-assets.glossier.com/production/spree/images/attachments/000/001/631/portrait_normal/SC_Carousel_1_copy_2.jpg?1506948615"},
                { title: "highlighter", image: "https://static-assets.glossier.com/production/spree/images/attachments/000/001/109/portrait_normal/Haloscope_01-compressor.jpg?1498613775" },
                { title: "bb_cc", image: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa8106b14/ProductImages/Face/BB_Cream/800897822927_bbcream_natural_main.jpg?sw=390&sh=390&sm=fit" },
                { title: "contour", image: "https://www.clinique.com/media/export/cms/products/181x209/clq_ZA1N01_181x209.png" },
                { title: "lip_stain", image: "https://d3t32hsnjxo7q6.cloudfront.net/i/1c87435efe0a260a66b3df7cd58aaed0_ra,w158,h184_pa,w158,h184.jpg" },
                { title: "mineral", image: "https://d3t32hsnjxo7q6.cloudfront.net/i/ffcc22368c1a34e5478730e6cba8790d_ra,w158,h184_pa,w158,h184.png" },
            ],
            brands: [
                "colourpop",
                "boosh",
                "deciem",
                "zorah biocosmetiques",
                "w3llpeople",
                "sally b's skin yummies",
                "rejuva minerals",
                "penny lane organics",
                "nudus",
                "marienatie",
                "maia's mineral galaxy",
                "lotus cosmetics usa",
                "green people",
                "coastal classic creation",
                "c'est moi",
                "alva",
                "glossier",
                "nyx",
                "fenty",
                "clinique",
                "dior",
                "iman",
                "benefit",
                "smashbox",
                "marcelle",
                "stila",
                "mineral fusion",
                "annabelle",
                "dr. hauschka",
                "physicians formula",
                "cargo cosmetics",
                "covergirl",
                "e.l.f.",
                "maybelline",
                "almay",
                "milani",
                "pure anada",
                "l'oreal",
                "sante",
                "revlon",
                "anna sui",
                "wet n wild",
                "pacifica",
                "mistura",
                "zorah",
                "suncoat",
                "moov",
                "misa",
                "salon perfect",
                "orly",
                "china glaze",
                "essie",
                "butter london",
                "sinful colours",
                "piggy paint",
                "dalish",
                "burt's bees"
            ],
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
