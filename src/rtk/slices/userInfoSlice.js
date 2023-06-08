import { createSlice } from "@reduxjs/toolkit";

const sliceName = "userInfoSlice";

export const userInfoSlice = createSlice({
  name: sliceName,
  initialState: {},
  reducers: {
    signInUser: (state, action) => {
      return { ...action.payload };
    },
    signOutUser: (state) => {
      return {};
    },
  },
});

export const userInfoReducers = userInfoSlice.reducer;
export const { signInUser, signOutUser } = userInfoSlice.actions;
