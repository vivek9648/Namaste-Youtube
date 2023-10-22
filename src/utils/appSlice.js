import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
isMenuOpenFlag:true,
    },
    reducers:{
        toggleMenu:(state)=>{
state.isMenuOpenFlag=!state.isMenuOpenFlag
        }
    }
})
export const {toggleMenu}=appSlice.actions
export default appSlice.reducer;