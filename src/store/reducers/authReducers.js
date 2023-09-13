import { createReducer } from "@reduxjs/toolkit";
import { refreshToken, signin, signout, signup } from "../actions/authActions";

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
  })
  builder.addCase(signout.fulfilled, (state) => {
    return {
      ...state,
      user: null,
      token: null,
    };
  });
});

export default authReducer;
