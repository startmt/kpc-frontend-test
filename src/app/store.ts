import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
