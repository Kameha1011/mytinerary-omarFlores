import { createReducer } from "@reduxjs/toolkit";
import {
  googleSignin,
  googleSignup,
  refreshToken,
  signin,
  signout,
  signup,
} from "../actions/authActions";

const initialState = {
  user: null,
  token: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(signin.fulfilled, (state, action) => {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
  });
  builder.addCase(refreshToken.fulfilled, (state, action) => {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  });
  builder.addCase(signup.fulfilled, (state, action) => {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  });
  builder.addCase(signout.fulfilled, (state) => {
    return {
      ...state,
      user: null,
      token: null,
    };
  });
  builder.addCase(googleSignin.fulfilled, (state, action) => {
    return {
      ...state,
      user: action.payload.user,
      picture: action.payload.picture,
      token: action.payload.token,
    };
  });
  builder.addCase(googleSignup.fulfilled, (state, action) => {
    if (action.payload) {
      return {
        ...state,
        user: action.payload.user,
        picture: action.payload.picture,
        token: action.payload.token,
      };
    }
    console.log('user already created');
  });
});

export default authReducer;
