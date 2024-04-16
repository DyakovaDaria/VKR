import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../features/Login';
import { userReducer } from '../entities/User';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});
