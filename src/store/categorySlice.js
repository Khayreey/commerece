import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : 'category' , 
    initialState : {
        categories : [],
        isWaiting :   true , 
        selectedCategory : {
            id : 1
        } , 
        isError : {}
    } , 
    reducers : {
        setCategories(state,action){
          state.categories = action.payload.categories
          state.selectedCategory = action.payload.selectedCategory  
          state.isError = {}
          state.isWaiting = false
        } , 
        setError(state,action){
            state.isError = action.payload
            state.isWaiting = false
        } , 
        setSelectedCategory(state,action){
            state.selectedCategory = action.payload
        } , 
        setIsWaiting(state,action){
            state.isWaiting = action.payload
        }
    }
})

export const categoyAcctions = categorySlice.actions
export default categorySlice