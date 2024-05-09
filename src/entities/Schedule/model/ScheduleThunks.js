import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchScheduleForDate = createAsyncThunk(
  "schedule/fetchScheduleForDate",
  async ({ userId, date }, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`https://api.yourschool.com/schedule/${teacherId}?date=${date}`);
      // return response.data;
      if (date === new Date().toISOString().split("T")[0]) {
        return [
          {
            id: 123,
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
            type: 'group',
            teacher: "Иванова Ольга",
            group: "Продолжающие",
          },
          {
            id: 133,
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
            type: 'group',
            teacher: "Иванова Ольга",
            group: "Продолжающие",
          },
          {
            id: 345,
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
            type: 'group',
            teacher: "Иванова Ольга",
            group: "Продолжающие",
          },
          {
            id: Date.now(),
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
            type: 'group',
            teacher: "Иванова Ольга",
            group: "Продолжающие",
          },
          {
            id: Date.now(),
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
            type: 'group',
            teacher: "Иванова Ольга",
            group: "Продолжающие",
          },
        ];
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
