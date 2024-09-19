import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
  sideState: false,
  cartState: false,
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.sideState = true;
    },
    setIsClose: (state) => {
      state.sideState = false;
    },
    setCartOpen:(state)=>{
      state.cartState = true
    },
    setCartClose:(state)=>{
      state.cartState = false
    }
  },
});

export const { setIsOpen, setIsClose, setCartOpen, setCartClose } = productSlice.actions;

export default productSlice.reducer;
