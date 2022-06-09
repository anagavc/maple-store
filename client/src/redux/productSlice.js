import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //getting products reducer
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getProductSuccess: (state, action) => {
      state.isFetching = true;
      state.products = action.payload;
      state.isFetching = false;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //adding product reducer
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isFetching = false;
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getProductSuccess,
  getProductStart,
  getProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
