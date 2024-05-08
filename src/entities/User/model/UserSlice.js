import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  fetchCurrUserDetails,
  fetchUserDetails,
  fetchUserGroups,
  registerAdmin,
  registerStudent,
  registerTeacher,
  updateUserDetails,
} from "./UserThunks";

const initialState = {
  userDetails: {
    userId: "",
    firstName: "",
    role: "",
    roles: [],
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    photo: null,
    description: "",
  },
  currentUserForChange: null,
  newUserCreation: false,
  groups: [],
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserDetails(state) {
      state.userDetails = {
        userId: "",
        firstName: "",
        role: "",
        roles: [],
        lastName: "",
        middleName: "",
        email: "",
        phoneNumber: "",
        photo: null,
        description: "",
      };
      state.currentUserForChange = null;
      state.newUserCreation = false;
      state.error = null;
      state.groups = [];
      state.loading = false;
    },
    addCurrentUser(state, action) {
      state.currentUserForChange = action.payload;
    },
    setNewUserCreation(state, action) {
      state.newUserCreation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchCurrUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCurrUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(registerTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newUserCreation = false;
      })
      .addCase(registerTeacher.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.newUserCreation = false;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newUserCreation = false;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.newUserCreation = false;
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.newUserCreation = false;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.newUserCreation = false;
      })
      .addCase(registerTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserGroups.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { clearUserDetails, addCurrentUser, setNewUserCreation } =
  UserSlice.actions;
export default UserSlice.reducer;
