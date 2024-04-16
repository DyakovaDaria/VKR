import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,  
  role: null,   
  username: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, role, username } = action.payload;
      state.token = token;
      state.role = role;
      state.username = username;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.username = null;
    },
  },
});

export const { setUser, setToken, logout } = UserSlice.actions;


export default UserSlice.reducer;
