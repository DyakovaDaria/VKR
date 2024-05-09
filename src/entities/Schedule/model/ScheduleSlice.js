import { createSlice } from "@reduxjs/toolkit";
import { fetchScheduleForDate, updateScheduleForDate } from "./ScheduleThunks";
import { act } from "react-dom/test-utils";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    loading: false,
    error: null,
    schedule: [
      {
        id: 123,
        title: "Танго для начинающих",
        description: "",
        date: Date.now(),
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: "group",
        teacher: "Дьякова Дарья",
        group: "Начинающие",
      },
      {
        id: 133,
        title: "Танго",
        description: "",
        date: Date.now(),
        startTime: "12:00",
        endTime: "13:30",
        classroom: "205",
        type: "group",
        teacher: "Дьякова Дарья",
        group: "Продолжающие",
      },
      {
        id: 134,
        title: "Танго",
        description: "",
        date: Date.now(),
        startTime: "14:00",
        endTime: "15:10",
        classroom: "205",
        type: "individual",
        teacher: "Дьякова Дарья",
        student: "",
      },
      {
        id: 345,
        title: "Танго",
        description: "",
        date: Date.now(),
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: "group",
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        id: Date.now(),
        title: "Танго",
        description: "",
        date: Date.now(),
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: "group",
        teacher: "Иванова Ольга",
        group: "Продолжающие",
      },
      {
        id: Date.now(),
        title: "Танго",
        description: "",
        date: Date.now(),
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: "group",
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
      state.schedule = [...state.schedule, action.payload];
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

export const { setSelectedDate, updateSchedule, toggleClassCreationModal } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
