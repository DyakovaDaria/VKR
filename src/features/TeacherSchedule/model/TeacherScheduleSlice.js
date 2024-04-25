import { createSlice } from "@reduxjs/toolkit";
import {
  fetchScheduleForDate,
  updateScheduleForDate,
} from "./TeacherScheduleThunks"; 

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    loading: false,
    error: null,
    schedule: [],
    selectedDate: new Date(),
    classCreationMode: false,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    updateSchedule: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.schedule.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.schedule[index] = { ...state.schedule[index], ...changes };
      }
    },
    toggleClassCreationModal: (state, action) => {
      state.classCreationMode = action.payload;
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
      })
      .addCase(updateScheduleForDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateScheduleForDate.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.loading = false;
      })
      .addCase(updateScheduleForDate.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelectedDate, updateSchedule, toggleClassCreationModal } = scheduleSlice.actions;
export default scheduleSlice.reducer;
