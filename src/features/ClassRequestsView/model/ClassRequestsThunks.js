import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeacherRequests = createAsyncThunk(
    "requestsList/fetchRequests",
    async (id, { getState, rejectWithValue }) => {
      const requests = getState().requestsList.requests;
      try {
        return requests;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const cancelCLassRequest = createAsyncThunk(
  "requestsList/removeRequest",
  async (id, { getState, rejectWithValue }) => {
    const requests = getState().requestsList.requests;
    try {
      return requests.filter((req) => req.id !== id);
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
