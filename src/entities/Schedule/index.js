import ScheduleView from "./ui/ScheduleView";
import reducer from "./model/ScheduleSlice";

export { ScheduleView, reducer as scheduleSlice };

export {
  fetchScheduleForDate,
  fetchTeacherScheduleForDate,
  updateScheduleForDate,
} from "./model/ScheduleThunks";

export { updateSchedule } from "./model/ScheduleSlice";
