import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const { enterChannel } = appSlice.actions;

export const selectChannelID = (state) => state.app.channelId;

export default appSlice.reducer;
