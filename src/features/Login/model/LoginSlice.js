import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginThunks';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
    }
  },
//   extraReducers: {
//     [loginUser.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [loginUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [loginUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     }
//   }
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
