import { createSlice } from "@reduxjs/toolkit";
import ApartData from "../../data/ApartData";


const initialState = {
    apartList: ApartData,
};


export const apartSlice = createSlice({
    name: "apart",
    initialState,
    reducers: {},

});


export default apartSlice.reducer;

