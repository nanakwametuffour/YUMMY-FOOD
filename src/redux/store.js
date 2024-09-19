import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/cart/cartSlice.js";
export const store = configureStore({
  reducer: {
    product: rootReducer,
  },
});

export default store;
