import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productsSlice";


const store = configureStore({
    reducer : {
        cartegory : categorySlice.reducer ,
        product : productSlice.reducer
    }
})

export default store 