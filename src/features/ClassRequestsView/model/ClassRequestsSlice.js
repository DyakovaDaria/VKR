import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import {
  acceptClassRequest,
  cancelCLassRequest,
  fetchTeacherRequests,
} from "./ClassRequestsThunks";

const classRequestsList = createSlice({
  name: "requestsList",
  initialState: {
    loading: false,
    error: null,
    requests: [
      {
        id: 123,
        title: "Танго",
        description: "",
        date: "2024-05-10",
        startTime: "10:00",
        endTime: "11:30",
        classroom: "205",
        type: "individual",
        teacher: "Иванова Ольга",
        student: "Петрова Юлия",
        group: null,
      },
      {
        id: 133,
        title: "Танго",
        description: "",
        date: "2024-05-11",
        startTime: "11:40",
        endTime: "12:40",
        classroom: "203",
        type: "individual",
        teacher: "Иванова Ольга",
        student: "Сидорова Ксения",
        group: null,
      },
      {
        id: 345,
        title: "Танго",
        description: "",
        date: "2024-05-11",
        startTime: "13:00",
        endTime: "14:30",
        classroom: "205",
        type: "individual",
        teacher: "Иванова Ольга",
        student: "Щербакова Мария",
        group: null,
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacherRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeacherRequests.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(acceptClassRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptClassRequest.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.loading = false;
      })
      .addCase(acceptClassRequest.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(cancelCLassRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelCLassRequest.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.loading = false;
      })
      .addCase(cancelCLassRequest.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelectedDate, updateSchedule, toggleClassCreationModal } =
  classRequestsList.actions;
export default classRequestsList.reducer;
