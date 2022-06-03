import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
