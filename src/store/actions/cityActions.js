import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCities, getCityById } from "../../api/citiesService";

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
export const get_city_by_id = createAsyncThunk(
  "get_city_by_id",
  async (id) => {
    try {
      const city = await getCityById(id);
      return {
        city,
      };
    } catch (error) {
      return {
        city: [],
        error,
      };
    }
  }
)