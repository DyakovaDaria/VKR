import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchScheduleForDate = createAsyncThunk(
  "schedule/fetchScheduleForDate",
  async ({ teacherId, date }, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`https://api.yourschool.com/schedule/${teacherId}?date=${date}`);
      // return response.data;
      if (date === new Date().toISOString().split("T")[0]) {
        return [
          {
            title: "Танго",
            description: "",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "205",
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
