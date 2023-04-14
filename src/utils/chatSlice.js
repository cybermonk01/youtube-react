import { createSlice } from "@reduxjs/toolkit";
import { LIVE_YOUTUBE_CHAT_COUNT } from "./constants";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessagesToChat: (state, action) => {
      state.messages.splice(LIVE_YOUTUBE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessagesToChat } = chatSlice.actions;
export default chatSlice.reducer;
