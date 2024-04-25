import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails, updateUserDetails } from './UserThunks';

const initialState = {
  userDetails: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserDetails(state) {
      state.userDetails = null;
      state.error = null;
      state.loading = false;
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
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.userDetails = { ...state.userDetails, ...action.payload };
        state.loading = false;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      }); 
  }
});

export const { clearUserDetails } = UserSlice.actions;
export default UserSlice.reducer;
