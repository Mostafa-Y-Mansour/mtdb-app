import { createSlice } from "@reduxjs/toolkit";

const sliceName = "userInfoSlice";

export const userInfoSlice = createSlice({
  name: sliceName,
  initialState: { isLogged: false },
  reducers: {
    signInUser: (state, action) => {
      return { isLogged: true, ...action.payload };
    },
    signOutUser: (state) => {
      return { isLogged: false };
    },
  },
});

export const userInfoReducers = userInfoSlice.reducer;
export const { signInUser, signOutUser } = userInfoSlice.actions;
