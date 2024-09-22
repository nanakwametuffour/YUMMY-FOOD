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
    setCartOpen: (state) => {
      state.cartState = true;
    },
    setCartClose: (state) => {
      state.cartState = false;
    },

    addToCart: (state, action) => {
      const item = state.cartProduct.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartProduct.push(action.payload);
      }
    },

    incrementItem: (state, action) => {
      const item = state.cartProduct.find((item) => item.id === action.payload);
      item.quantity++;
    },
     decrementItem:(state, action)=>{
      const item = state.cartProduct.find((item)=>item.id === action.payload)
           if(item.quantity ===1){
             item.quantity = 1
           }else{
            item.quantity--
           }
     },
    dealetItem: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
    },

    clearItem: (state) => {
      state.cartProduct = [];
    },
  },
});

export const {
  setIsOpen,
  setIsClose,
  setCartOpen,
  setCartClose,
  addToCart,
  clearItem,
  dealetItem,
   incrementItem,
   decrementItem
} = productSlice.actions;

export default productSlice.reducer;
