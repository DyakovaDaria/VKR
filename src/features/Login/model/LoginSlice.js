import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, fetchUserInformation } from "./loginThunks";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  role: "teacher", // change later!
  isAuthenticated: false,
  error: null,
};

export const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState(state) {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        state.user = {
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          patronymic: action.payload.patronymic,
          email: action.payload.email,
          photoUrl: action.payload.photoUrl,
          roles: action.payload.roles,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.role = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearAuthState } = LoginSlice.actions;
export default LoginSlice.reducer;
