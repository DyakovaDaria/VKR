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
      } else  {
        return [
          {
            id: Date.now(),
            title: "Танго",
            description: "",
            date: "2024-05-11",
            startTime: "11:40",
            endTime: "12:40",
            classroom: "205",
            type: "individual",
            teacher: "Дьякова Дарья",
            student: "Сидорова Ксения",
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
        ];
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
  async ({ updatedSchedule }, { rejectWithValue }) => {
    try {
      return updatedSchedule;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
