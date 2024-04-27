import { createSlice } from "@reduxjs/toolkit";
import {
  fetchScheduleForDate,
  updateScheduleForDate,
} from "./ScheduleThunks"; 

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    loading: false,
    error: null,
    schedule: [
      {
        title: "Танго",
        description: "",
        date: Date.now,
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: 'group',
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        title: "Танго",
        description: "",
        date: Date.now,
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: 'group',
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        title: "Танго",
        description: "",
        date: Date.now,
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: 'group',
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        title: "Танго",
        description: "",
        date: Date.now,
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: 'group',
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        title: "Танго",
        description: "",
        date: Date.now,
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: 'group',
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
    ],
    selectedDate: new Date(),
    classCreationMode: false,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    updateSchedule: (state, action) => {
      state.schedule.push(action.payload);
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
