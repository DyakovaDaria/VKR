import { createSlice } from "@reduxjs/toolkit";
import {
  fetchScheduleForDate,
  updateScheduleForDate,
} from "../../../entities/Schedule"; 

const teacherScheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    loading: false,
    error: null,
    classCreationMode: false,
  },
  reducers: {
    toggleClassCreationModal: (state, action) => {
      state.classCreationMode = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { setSelectedDate, updateSchedule, toggleClassCreationModal } = teacherScheduleSlice.actions;
export default teacherScheduleSlice.reducer;
