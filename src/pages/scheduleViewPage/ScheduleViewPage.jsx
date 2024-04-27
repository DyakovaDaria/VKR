import { ScheduleView } from "../../entities/Schedule";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";
import AdminNavbar from '../../widgets/adminNavbar/AdminNavbar';
import { useSelector } from "react-redux";

const ScheduleViewPage = () => {
  const { role } = useSelector((state) => state.login);
  const chooseMenu = () => {
    if (role === 'teacher') {
      return <TeacherNavbar></TeacherNavbar>;
    } else if (role==='student') {
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
