import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSubscriptionsForStudent = createAsyncThunk(
  "subscriptions/fetchForStudent",
  async (studentId, { rejectWithValue }) => {
    try {
    //   const response = await axios.get(
    //     `/api/subscriptions/student/${studentId}`
    //   );
    //   return response.data;
    return [
        {
            id: 123,
            name: 'абонемент на 2 месяца',
            price: 3000.00, 
            description : '', 
            duration: 2,
            isActive: true,
        },
        {
            id: 133,
            name: 'абонемент на 3 месяца',
            price: 4500.00, 
            description : '', 
            duration: 3,
            isActive: true,
        },
        {
            id: 144,
            name: 'абонемент на 1 месяц',
            price: 1600.00, 
            description : '', 
            duration: 1,
            isActive: true,
        },
    ];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const assignSubscriptionToStudent = createAsyncThunk(
  "subscriptions/assignToStudent",
  async ({ studentId, subscriptionId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/subscriptions/assign`, {
        studentId,
        subscriptionId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
