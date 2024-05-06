import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, fetchUserInformation } from './LoginThunks';

const initialState = {
  isLogin: true, //!change later!,
  error: null,
};

export const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState(state) {
      state.isLogin = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLogin = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearAuthState } = LoginSlice.actions;
export default LoginSlice.reducer;
