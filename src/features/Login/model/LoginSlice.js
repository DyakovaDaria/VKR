import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  loading: false,
  error: null
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    resetForm(state) {
      state.username = '';
      state.password = '';
      state.error = null;
      state.loading = false;
    }
  }
});

export const { setUsername, setPassword, resetForm } = LoginSlice.actions;
export default LoginSlice.reducer;
