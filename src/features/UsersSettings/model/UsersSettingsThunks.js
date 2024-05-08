import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (currPage, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:7001/Admins/AllUsers`,
        {
          params: {
            page: currPage,
            itemsPerPage: 9,
          },
          headers: {
            accept: "accept: text/plain",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return {
        users: response.data.users,
        totalCount: response.data.totalCount,
      };
    } catch (error) {
      return rejectWithValue(error("Failed to fetch users:", error));
    }
  }
);
