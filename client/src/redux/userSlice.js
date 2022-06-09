import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
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
    logoutSuccess: (state) => {
      state.currentUser = "";
      state.isFetching = false;
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
  logoutSuccess,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = userSlice.actions;
export default userSlice.reducer;
