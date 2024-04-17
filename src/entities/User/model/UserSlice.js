import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './UserThunks'; 

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserState(state) {
      state.token = null;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(loginUser.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(loginUser.fulfilled, (state, action) => {
      //   state.token = action.payload.token;
      //   state.user = action.payload.user;
      //   state.loading = false;
      // })
      // .addCase(loginUser.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.loading = false;
      // })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
      });
  }
});

export const { clearUserState } = UserSlice.actions;
export default UserSlice.reducer;
