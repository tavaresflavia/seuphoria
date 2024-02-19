import { createSlice } from "@reduxjs/toolkit";

interface TotalState {
  value: number;
}

const initialState: TotalState = {
  value: 0,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    addTotal: (state, action) => {
      state.value += action.payload;
    },
    removeTotal: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addTotal, removeTotal } = totalSlice.actions;
