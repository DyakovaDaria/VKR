import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeacherRequests = createAsyncThunk(
    "requestsList/fetchRequests",
    async (id, { rejectWithValue }) => {
      try {
        return id;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const cancelCLassRequest = createAsyncThunk(
  "requestsList/removeRequest",
  async (id, { rejectWithValue }) => {
    try {
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const acceptClassRequest = createAsyncThunk(
  "requestsList/acceptRequest",
  async (id, { rejectWithValue }) => {
    try {
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
