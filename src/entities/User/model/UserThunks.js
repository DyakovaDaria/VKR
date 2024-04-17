import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Запрос данных пользователя
export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Обновление данных пользователя
export const updateUserDetails = createAsyncThunk(
  'user/updateUserDetails',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
