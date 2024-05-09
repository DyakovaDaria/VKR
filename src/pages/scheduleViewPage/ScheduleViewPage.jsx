import { ScheduleView } from "../../entities/Schedule";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";
import AdminNavbar from '../../widgets/adminNavbar/AdminNavbar';
import { useSelector } from "react-redux";

const ScheduleViewPage = () => {
  const { userDetails } = useSelector((state) => state.user);
  const chooseMenu = () => {
    if (userDetails?.role === "Teacher" || userDetails?.roles[0] === "Teacher") {
      return <TeacherNavbar></TeacherNavbar>;
    } else if (userDetails?.role === "Student" || userDetails?.roles[0] === "Student") {
      return <StudentNavbar></StudentNavbar>
    } else {
      return <AdminNavbar></AdminNavbar>
    }
  };
  return (
    <div>
      {chooseMenu()}
      <ScheduleView></ScheduleView>
    </div>
  );
};

export default ScheduleViewPage;
