import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails, fetchUserGroups, registerTeacher, updateUserDetails } from "./UserThunks";

const initialState = {
  userDetails: {
    userId: "",
    firstName: "",
    role: '',
    roles: [],
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    photo: null,
    description: '',
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
        description: '',
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
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(registerTeacher.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerTeacher.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(registerTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserGroups.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.userDetails = { ...state.userDetails, ...action.payload };
        state.loading = false;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { clearUserDetails, addCurrentUser, setNewUserCreation } =
  UserSlice.actions;
export default UserSlice.reducer;
