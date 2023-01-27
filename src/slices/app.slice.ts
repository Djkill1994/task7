import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  currentUserName: string;
}

const initialState: IAppState = { currentUserName: "" };

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUserName: (state, { payload }) => {
      state.currentUserName = payload;
    },
  },
});

export const { setCurrentUserName } = appSlice.actions;
