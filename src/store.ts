import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryMessenger } from "./middlewares/rtkQueryMessenger";
import { appSlice } from "./slices/app.slice";
import { gamesApi } from "./api/games";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryMessenger, gamesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
