import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './UsersSettingsThunks';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const UsersSettingsSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    clearUsers(state) {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { clearUsers } = UsersSettingsSlice.actions;
export default UsersSettingsSlice.reducer;
