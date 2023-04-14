import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    filteredVideos: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setFilteredVideos: (state, action) => {
      state.filteredVideos = action.payload;
    },
  },
});

export const { setVideos, setFilteredVideos } = videoSlice.actions;
export default videoSlice.reducer;
