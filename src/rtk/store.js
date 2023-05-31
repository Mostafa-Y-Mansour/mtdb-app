import { configureStore } from "@reduxjs/toolkit";
import { showInfoReducer } from "./slices/showInfoSlice";
import { showEpisodesReducer } from "./slices/showEpisodesSlice";
import { favoriteShowsReducers } from "./slices/favoriteShowSlice";

export const store = configureStore({
  reducer: {
    showInfo: showInfoReducer,
    showEpisodes: showEpisodesReducer,
    favoriteShows: favoriteShowsReducers,
  },
});
