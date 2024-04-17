import { ClassPreview } from "../../entities/Class";
import TeacherNavbar from "../../widgets/TeacherNavbar/TeacherNavbar";
import WeekCalendar from "../../widgets/weekCalendar/WeekCalendar";

const ScheduleViewPage = () => {
    return (
        <div>
          <TeacherNavbar></TeacherNavbar>
          <WeekCalendar></WeekCalendar>
          <ClassPreview></ClassPreview>
        </div>
      );
}

export default ScheduleViewPage;