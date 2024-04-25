import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadClassrooms = createAsyncThunk(
  'classrooms/load',
  async (_, { rejectWithValue }) => {
    try {
      const list = [
        { id: 200, name: 'Зал 200', status: 'partial'},
        { id: 201, name: 'Зал 201', status: 'free'},
        { id: 202, name: 'Зал 202', status: 'occupied'},
        { id: 203, name: 'Зал 203', status: 'free'},
      ];
      return list;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
