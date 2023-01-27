import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryMessenger } from "./middlewares/rtkQueryMessenger";
import { appSlice } from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryMessenger),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
