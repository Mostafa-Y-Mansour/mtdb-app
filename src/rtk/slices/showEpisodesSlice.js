import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEpisodesApi } from "../../services/api";

const sliceName = "showEpisodesSlice";

export const fetchEpisodes = createAsyncThunk(
  `${sliceName}/fetchEpisodes`,
  async (id) => {
    try {
      const data = await getEpisodesApi(id).then((res) => res.data);
      return data;
    } catch (err) {
      console.error("Error", err.response.status);
      return err.response.status;
    }
  }
);

export const showEpisodesSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state, action) => {
      return "pending";
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state = [];
      return (state = action.payload);
    });
  },
});

export const showEpisodesReducer = showEpisodesSlice.reducer;
