import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryMessenger } from "./middleware/rtkQueryMessenger";
import { appSlice } from "./slice/app.slice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryMessenger),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
