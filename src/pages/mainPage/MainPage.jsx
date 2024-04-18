import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";
import AdminNavbar from '../../widgets/adminNavbar/AdminNavbar'
import { useSelector, useDispatch } from "react-redux";
import { EventsList } from "../../widgets/eventsList";

const MainPage = () => {
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
      <EventsList></EventsList>
    </div>
  );
};

export default MainPage;
