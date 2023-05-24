import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getShowPage } from "../../services/api";

const sliceName = "showInfoSlice";

export const fetchShow = createAsyncThunk(
  `${sliceName}/fetchShow`,
  async (id) => {
    try {
      const data = await getShowPage(id).then((res) => res.data);
      return data;
    } catch (err) {
      console.error("Error", err.response.status);
      return err.response.status;
    }
  }
);

export const showInfoSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state, action) => {
      return "pending";
    });
    builder.addCase(fetchShow.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const showCardReducer = showInfoSlice.reducer;
