import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchScheduleForDate = createAsyncThunk(
  "schedule/fetchScheduleForDate",
  async ({ userId, date }, { getState, rejectWithValue }) => {
    try {
      const schedule = getState().schedule.schedule;
      if (date === new Date().toISOString().split("T")[0]) {
        return schedule;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTeacherScheduleForDate = createAsyncThunk(
  "schedule/fetchScheduleForDate",
  async ({ userId, date }, { getState, rejectWithValue }) => {
    try {
      const schedule = getState().schedule.schedule;
      if (date === new Date().toISOString().split("T")[0]) {
        return schedule.filter((lesson) => lesson.teacher === userId);
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const fetchScheduleForDate = createAsyncThunk(
//   "schedule/fetchScheduleForDate",
//   async ({ from, to }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:7001/Lessons/All`,
//         {
//           params: {
//             From: from, 
//             To: to,
//             IncludeTerminated: false,
//           },
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       console.log('success');
//       console.log("schedule data: " + JSON.stringify(response.data));
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const updateScheduleForDate = createAsyncThunk(
  "schedule/updateScheduleForDate",
  async ({updatedSchedule, date}, { rejectWithValue }) => {
    try {
      return updatedSchedule;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
