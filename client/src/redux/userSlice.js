import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    registrationStart: (state) => {
      state.isFetching = true;
    },
    registrationSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registrationFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logoutSuccess,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = userSlice.actions;
export default userSlice.reducer;
