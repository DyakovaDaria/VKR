import TeacherScheduleView from "../../features/TeacherSchedule/ui/TeacherScheduleView/TeacherScheduleView";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";

const ScheduleViewPage = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <TeacherScheduleView></TeacherScheduleView>
    </div>
  );
};

export default ScheduleViewPage;
