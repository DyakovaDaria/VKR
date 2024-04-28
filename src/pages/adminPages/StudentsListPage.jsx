import { UsersListView } from "../../features/UsersSettings";
import AdminNavbar from "../../widgets/adminNavbar/AdminNavbar";

const StudentProfilePage = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <UsersListView></UsersListView>
    </div>
  );
};

export default StudentProfilePage;
