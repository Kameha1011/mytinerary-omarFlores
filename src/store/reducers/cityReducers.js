import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities } from "../actions/eventActions";
const initialState = {
  city: [],
};

const cityReducer = createReducer(initialState, (builder) =>
  builder
  .addCase(get_cities.fulfilled, (state, action) => {
    return {
      ...state,
      city: action.payload.cities,
    } 
  })
  .addCase(filter_cities.fulfilled, (state, action) => {
    return {
      ...state,
      city: action.payload.cities,
    };
  })
);

export default cityReducer;
