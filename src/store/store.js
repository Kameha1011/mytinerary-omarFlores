import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";
import authReducer from "./reducers/authReducers";

export const store = configureStore({
  reducer: {
    cityReducer,
    authReducer
  },
});
