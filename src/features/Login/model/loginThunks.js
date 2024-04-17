import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI } from '../api/loginApi';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginAPI(credentials);
      // Assuming the API returns an object with token and user details
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
