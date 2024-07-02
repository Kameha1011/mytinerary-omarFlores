import axios from "axios";

const authRequest = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? "https://mytinerary-back-omarflores.onrender.com/api/auth"
      : "http://localhost:3000/api/auth",
});

export const signin = async (data) => {
  try {
    const response = await authRequest.post("/signin", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data) => {
  try {
    const response = await authRequest.post("/signup", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const googleSignin = async (token) => {
  try {
    const response = await authRequest.post("/googleSignin", {
      token_id: token,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const googleSignup = async (token) => {
  try {
    const response = await authRequest.post("/googleSignup", {
      token_id: token,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signout = async (token) => {
  try {
    await authRequest.post(
      "/signout",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const verify = async (token) => {
  try {
    const response = await authRequest.post(
      "/verify",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
