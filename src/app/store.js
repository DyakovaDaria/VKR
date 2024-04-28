import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/Login";
import { userReducer } from "../entities/User";
import { classReducer } from "../entities/Class";
import { teacherScheduleReducer } from "../features/TeacherSchedule";
import { weekCalendarReducer } from "../widgets/weekCalendar";
import { eventsListReducer } from "../widgets/eventsList";
import { classroomReducer } from "../entities/Classroom";
import { scheduleSlice } from "../entities/Schedule";
import { usersSettingsReducer } from "../features/UsersSettings";
import { subscriptionsReducer } from "../features/Subscriptions";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    class: classReducer,
    teacherSchedule: teacherScheduleReducer,
    schedule: scheduleSlice,
    weekCalendar: weekCalendarReducer,
    eventsList: eventsListReducer,
    classroom: classroomReducer,
    usersSettings: usersSettingsReducer,
    subscriptions: subscriptionsReducer,
  },
});
