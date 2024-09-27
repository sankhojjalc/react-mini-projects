import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentPage: 1,
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
  },
});

export const { addProducts, nextPage, prevPage } = productSlice.actions;
export default productSlice.reducer;
