import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signin as signinService,
  signup as signupService,
  signout as signoutService,
  googleSignin as googleSigninService,
  googleSignup as googleSignupService,
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

export const googleSignin = createAsyncThunk("googleSignin", async (data) => {
  try {
    const response = await googleSigninService(data);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const signup = createAsyncThunk("signup", async (data) => {
  try {
    const response = await signupService(data);
    if (response.status === 409) return null;
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const googleSignup = createAsyncThunk("googleSignup", async (data) => {
  try {
    const response = await googleSignupService(data);
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
