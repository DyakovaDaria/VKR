import { ClassRequestsView } from "../../features/ClassRequestsView";
import TeacherNavbar from "../../widgets/teacherNavbar/TeacherNavbar";

const TeacherClassRequestsPage = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <ClassRequestsView></ClassRequestsView>
    </div>
  );
};

export default TeacherClassRequestsPage;
