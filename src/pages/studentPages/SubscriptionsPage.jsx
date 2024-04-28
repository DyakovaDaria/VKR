import { UserSubscriptionsList } from "../../features/Subscriptions";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";

const StudentProfilePage = () => {
  return (
    <div>
      <StudentNavbar></StudentNavbar>
      <UserSubscriptionsList></UserSubscriptionsList>
    </div>
  );
};

export default StudentProfilePage;
