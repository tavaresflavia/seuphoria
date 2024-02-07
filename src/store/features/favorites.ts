import { createSlice } from "@reduxjs/toolkit";

interface FavState {
  value: string[];
}

const initialState: FavState = {
  value: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state: FavState, action) => {
        state.value.push(action.payload)
    },
    removeFav:(state: FavState, action) => {
        state.value[state.value.indexOf(action.payload)] = state.value[state.value.length-1]
        state.value.pop()
    }
  },
});

export const {addFav, removeFav} = favSlice.actions;
