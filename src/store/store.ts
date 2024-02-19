import { cartSlice } from "./features/cart";
import { favSlice } from "./features/favorites";
import { totalSlice } from "./features/total";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favSlice.reducer,
    total: totalSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;