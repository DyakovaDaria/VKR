import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './loginThunks';

const initialState = {
  token: localStorage.getItem('token') || null,
  user: null,
  isAuthenticated: false,
  error: null,
};

export const LoginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthState(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export const { clearAuthState } = LoginSlice.actions;
export default LoginSlice.reducer;
