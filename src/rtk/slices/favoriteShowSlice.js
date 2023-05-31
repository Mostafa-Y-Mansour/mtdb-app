import { createSlice } from "@reduxjs/toolkit";

const sliceName = "favoriteShowsSlice";

const initialState = [];

export const favoriteShowsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addFavoriteShow: (state, action) => {
      return [...state, action.payload];
    },
    removeFavoriteShow: (state, action) => {
      return state.filter((show) => show.id !== action.payload.id);
    },
  },
});

export const favoriteShowsReducers = favoriteShowsSlice.reducer;
export const { addFavoriteShow, removeFavoriteShow } =
  favoriteShowsSlice.actions;
