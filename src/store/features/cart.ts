import { createSlice } from '@reduxjs/toolkit';

interface CartState{
  value: { [index: string]: number };
}

const initialState: CartState = {
  value : { },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartState, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload] += 1;
      } else {
        state.value[action.payload] = 1;
      }
    },
    removeProduct: (state, action) => {
      if (state.value[action.payload]) {
        if (state.value[action.payload] === 1) {
          delete state.value[action.payload];
        } else {
          state.value[action.payload] -= 1;
        }
      }
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;



