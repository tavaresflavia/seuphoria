import { createSlice } from "@reduxjs/toolkit";


const initialState = 0

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    addTotal: (state, action) => {
        return state + action.payload

    },
    removeTotal:(state, action) => {
        return state - action.payload
    }
  },
});

export const {addTotal, removeTotal} = totalSlice.actions;
