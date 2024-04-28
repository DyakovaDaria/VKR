import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSubscriptionsForStudent,
  assignSubscriptionToStudent,
} from "./SubscriptionsThunks";

const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState: {
    subscriptions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionsForStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptionsForStudent.fulfilled, (state, action) => {
        state.subscriptions = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubscriptionsForStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(assignSubscriptionToStudent.fulfilled, (state, action) => {
        state.subscriptions.push(action.payload);
        state.loading = false;
      })
      .addCase(assignSubscriptionToStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default subscriptionsSlice.reducer;
