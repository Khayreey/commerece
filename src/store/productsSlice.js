import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'category' , 
    initialState : {
        products : [],
        isWaiting :   true , 
        isError : {}
    } , 
    reducers : {
        setProducts(state,action){
          state.products = action.payload
          state.isError = {}
          state.isWaiting = false
        } , 
        setError(state,action){
            state.isError = action.payload
            state.isWaiting = false
        } , 
        setIsWaiting(state,action){
            state.isWaiting = action.payload
        }
    }
})

export const productActions = productSlice.actions
export default productSlice