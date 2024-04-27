import { UserProfile } from "../../entities/User";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";

const StudentProfilePage = () => {
  return (
    <div>
      <StudentNavbar></StudentNavbar>
      <UserProfile userId={1}></UserProfile>
    </div>
  );
};

export default StudentProfilePage;
