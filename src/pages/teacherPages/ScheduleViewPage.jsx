import { ClassPreview } from "../../entities/Class";
import TeacherScheduleView from "../../features/TeacherSchedule/ui/TeacherScheduleView/TeacherScheduleView";
import TeacherNavbar from "../../widgets/TeacherNavbar/TeacherNavbar";

const ScheduleViewPage = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <TeacherScheduleView></TeacherScheduleView>
    </div>
  );
};

export default ScheduleViewPage;
