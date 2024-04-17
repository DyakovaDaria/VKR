import TeacherNavbar from "../../widgets/TeacherNavbar/TeacherNavbar";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";
import AdminNavbar from '../../widgets/adminNavbar/AdminNavbar'
import { useSelector, useDispatch } from "react-redux";

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
      <div>
        
      </div>
    </div>
  );
};

export default MainPage;
