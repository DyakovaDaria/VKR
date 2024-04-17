import { createSlice } from "@reduxjs/toolkit";
import { fetchScheduleForDate } from "./TeacherScheduleThunks";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    loading: false,
    error: null,
    schedule: [],
    selectedDate: new Date(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScheduleForDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScheduleForDate.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.loading = false;
      })
      .addCase(fetchScheduleForDate.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelectedDate } = scheduleSlice.actions;
export default scheduleSlice.reducer;
