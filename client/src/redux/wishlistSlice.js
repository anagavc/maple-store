import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistID: null,
    wishlist: [],
  },
  reducers: {
    createWishlist: (state, action) => {
      state.wishlistID = action.payload._id;
      state.wishlist = [];
    },
    addToWishlist: (state, action) => {
      state.wishlistID = action.payload._id;
      state.wishlist = action.payload.wishlist;
    },
    updateWishlist: (state, action) => {
      state.wishlist = action.payload.wishlist;
    },
  },
});

export const { createWishlist, addToWishlist, updateWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
