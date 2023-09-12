import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signin as signinService,
  signout as signoutService,
  verify,
} from "../../api/authService";

export const signin = createAsyncThunk("signin", async (data) => {
  try {
    const response = await signinService(data);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const signout = createAsyncThunk("signout", async () => {
  try {
    const token = localStorage.getItem("token");
    await signoutService(token);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
});

export const refreshToken = createAsyncThunk("refreshToken", async () => {
  try {
    const token = localStorage.getItem("token");
    const data = await verify(token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
