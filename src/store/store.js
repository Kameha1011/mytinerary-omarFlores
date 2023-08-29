import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";

export const store = configureStore({
  reducer: {
    cityReducer,
  },
});
