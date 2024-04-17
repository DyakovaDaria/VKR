import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
