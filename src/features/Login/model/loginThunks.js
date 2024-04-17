import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LOGIN_API = "http://yourapiurl.com/api/Identities/Login";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_API, credentials);
      const data = response.data;
      if (data.token) {
        const decodedToken = jwtDecode(data.token);
        localStorage.setItem("token", data.token);
        return { token: data.token, user: data.user, role: decodedToken.role };
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      return rejectWithValue(error.response.data || "Error during login");
    }
  }
);

export const fetchUserInformation = createAsyncThunk(
  "auth/fetchUserInformation",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${LOGIN_API}/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Unable to fetch user information");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_API);
      localStorage.removeItem("token");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error during logout");
    }
  }
);
