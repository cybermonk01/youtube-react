import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedResult: (state, action) => {
      // {"ip":["iphone", "iphone 11"]}
      // state = { ...state, ...action.payload };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cachedResult } = searchSlice.actions;
export default searchSlice.reducer;
