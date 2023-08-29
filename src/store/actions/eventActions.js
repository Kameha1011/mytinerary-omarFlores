import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCities } from "../../../api/citiesService";

export const get_cities = createAsyncThunk("get_cities", async () => {
  try {
    const cities = await getCities();
    return {
      cities,
    };
  } catch (error) {
    return {
      cities: [],
      error,
    };
  }
});

export const filter_cities = createAsyncThunk(
  "filter_cities",
  async ({ name, continent }) => {
    try {
      const cities = await getCities(name, continent);
      return {
        cities,
      };
    } catch (error) {
      return {
        cities: [],
        error,
      };
    }
  }
);
