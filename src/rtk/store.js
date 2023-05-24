import { configureStore } from "@reduxjs/toolkit";
import { showCardReducer } from "./slices/showInfoSlice";

export const store = configureStore({
  reducer: {
    showInfo: showCardReducer,
  },
});
