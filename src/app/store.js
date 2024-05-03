import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/Login";
import { userReducer } from "../entities/User";
import { classReducer } from "../entities/Class";
import { teacherScheduleReducer } from "../features/TeacherSchedule";
import { weekCalendarReducer } from "../widgets/weekCalendar";
import { eventsReducer } from "../entities/Event";
import { classroomReducer } from "../features/ClassroomsSettings";
import { scheduleSlice } from "../entities/Schedule";
import { usersSettingsReducer } from "../features/UsersSettings";
import { subscriptionsReducer } from "../features/Subscriptions";
import { eventsListReducer } from "../widgets/eventsList";
import { requestsListReducer } from "../features/ClassRequestsView";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    class: classReducer,
    teacherSchedule: teacherScheduleReducer,
    schedule: scheduleSlice,
    weekCalendar: weekCalendarReducer,
    events: eventsReducer,
    classroom: classroomReducer,
    usersSettings: usersSettingsReducer,
    subscriptions: subscriptionsReducer,
    eventsList: eventsListReducer,
    requestsList: requestsListReducer,
  },
});
