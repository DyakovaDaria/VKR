import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./UsersSettingsThunks";

const initialState = {
  users: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const UsersSettingsSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.totalCount = action.payload.totalCount;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default UsersSettingsSlice.reducer;
