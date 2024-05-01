import { UserProfile } from "../../entities/User";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";

const TeacherProfilePage = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <UserProfile></UserProfile>
    </div>
  );
};

export default TeacherProfilePage;
