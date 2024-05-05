import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockUserData = {
  id: "123",
  name: "Ольга",
  role: 'teacher',
  lastName: "Иванова",
  secondName: "Ивановна",
  description: 'Стаж работы 10 лет. Образование - "Педагог-хореограф".',
  email: "ivanovaolga@example.com",
  phone: "123-456-7890",
  groups: [
    {
      level: "начинающие",
      dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
    },
    {
      level: "продолжающие",
      dates: [
        { weekDay: "среда", time: "16:30 - 17:30" },
        { weekDay: "пятница", time: "16:30 - 17:30" },
      ],
    },
  ],
  schedule: [
    {
      id: 123,
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
      id: 133,
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
  pic: null,
};

// Запрос данных пользователя
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (userId, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`/api/users/${userId}`);
      // return response.data;
      // return await new Promise((resolve) =>
      //   setTimeout(() => resolve(mockUserData), 500)
      // );
      return mockUserData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Обновление данных пользователя
export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      // const response = await axios.put(`/api/users/${userId}`, userData);
      // return response.data;
      return await new Promise((resolve) =>
        setTimeout(() => resolve(userData), 500)
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
