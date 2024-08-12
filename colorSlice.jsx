import { createSlice } from "@reduxjs/toolkit";
const colorSlice =createSlice({
    name:"mycolor",
    initialState:{
        color:"yellow"
    },
    reducers:{
        byChange:(state,action)=>{
            state.color=action.payload;
        }
    }
})
export const {byChange}=colorSlice.actions;
export default colorSlice.reducer;