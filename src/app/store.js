import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../features/Login';
import { userReducer } from '../entities/User';
import { classReducer } from '../entities/Class';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    class: classReducer,
  },
});
