import { UserProfile } from "../../entities/User";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";

const TeacherProfilePage = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <UserProfile userId={1}></UserProfile>
    </div>
  );
};

export default TeacherProfilePage;
