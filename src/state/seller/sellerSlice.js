import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "seller/fetchSellerProfile",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
     console.log("Fetch seller profile successfully:", response.data);
    } catch (error) {
      console.error("Fetch seller profile error:", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch seller profile"
      );
    }
  }
);
