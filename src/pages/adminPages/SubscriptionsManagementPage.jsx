import AdminSubscriptionManagement from "../../features/Subscriptions/ui/subscriptionsManagement/AdminSubscriptionManagement";
import AdminNavbar from "../../widgets/adminNavbar/AdminNavbar";

const SubscriptionsManagementPage = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <AdminSubscriptionManagement></AdminSubscriptionManagement>
    </div>
  );
};

export default SubscriptionsManagementPage;
