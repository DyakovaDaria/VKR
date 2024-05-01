import AdminNavbar from "../../widgets/adminNavbar/AdminNavbar";
import { UserProfile } from "../../entities/User";

const AdminProfilePage = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <UserProfile></UserProfile>
    </div>
  );
};

export default AdminProfilePage;
