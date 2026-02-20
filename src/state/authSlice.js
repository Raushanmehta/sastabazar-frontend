import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";


export const sendLoginSignupOtp = createAsyncThunk(
  "auth/sendLoginSignupOtp",
  async ({email}, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp",{email});
      console.log("login otp", response.data);
    
    } catch (error) {
      console.error("erorr ---", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to send login otp"
      );
    }
  }
);


export const signin = createAsyncThunk("/auth/signin",
  async(loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      console.log("login otp", response.data);
    
    } catch (error) {
      console.error("erorr ---", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to send login otp"
      );
    }
  }
)
// 1:02:20:35