import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../features/Login';
import { userReducer } from '../entities/User';
import { classReducer } from '../entities/Class';
import {teacherScheduleReducer} from '../features/TeacherSchedule';
import {weekCalendarReducer} from '../widgets/weekCalendar';
import { eventsListReducer } from '../widgets/eventsList';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    class: classReducer,
    teacherSchedule: teacherScheduleReducer,
    weekCalendar: weekCalendarReducer,
    eventsList: eventsListReducer,
  },
});
