import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockUserData = {
  id: "123",
  name: "Ольга",
  role: "teacher",
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

const mockGroups = [
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
];

export const fetchUserGroups = createAsyncThunk(
  "user/fetchUserGroups",
  async (_, { rejectWithValue }) => {
    try {
      return mockGroups;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCurrUserDetails = createAsyncThunk(
  "user/fetchCurrUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:7001/Identities/UserInformation`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:7001/Admins/UserInformation/${userId}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("user data: " + JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerTeacher = createAsyncThunk(
  "user/registerTeacher",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:7001/Admins/RegisterTeacher`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.description);
    }
  }
);

export const registerStudent = createAsyncThunk(
  "user/registerStudent",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:7001/Admins/RegisterStudent`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.description);
    }
  }
);

export const registerAdmin = createAsyncThunk(
  "user/registerAdmin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:7001/Admins/RegisterAdministrator`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.description);
    }
  }
);

// Обновление данных пользователя
export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ userId, user }, { rejectWithValue }) => {
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      phoneNumber: user.phoneNumber,
      photo: user.photo,
    };
    try {
      const response = await axios.put(
        `http://localhost:7001/Admins/UpdateUser/${userId}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log("error" + userData + JSON.stringify(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:7001/Admins/Delete/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log("error" + JSON.stringify(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);
