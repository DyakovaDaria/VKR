import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { apiRequest } from "../../../shared/api/requests";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (currPage, { rejectWithValue }) => {
    try {
      console.log('fetch users...');
      const userDetails = await apiRequest(
        "get",
        `/Admins/AllUsers`,
        {
          page: currPage,
          itemsPerPage: 9,
        },
        {
          accept: "accept: text/plain",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      );
      console.log("user data: " + JSON.stringify(userDetails));
      return {
        users: userDetails.users,
        totalCount: userDetails.totalCount,
      };
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
