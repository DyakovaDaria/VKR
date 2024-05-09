import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import TeacherScheduleEditPage from "../pages/teacherPages/TeacherScheduleEditPage";
import TeacherProfilePage from "../pages/teacherPages/TeacherProfilePage";
import ScheduleViewPage from "../pages/scheduleViewPage/ScheduleViewPage";
import { ClassInfo } from "../entities/Class";
import StudentProfilePage from "../pages/studentPages/StudentProfilePage";
import StudentsListPage from "../pages/adminPages/StudentsListPage";
import SubscriptionsPage from "../pages/studentPages/SubscriptionsPage";
import CreateUserPage from "../pages/adminPages/CreateUserPage";
import CreateEventsPage from "../pages/adminPages/CreateEventsPage";
import ChangeClassroomsPage from "../pages/adminPages/ChangeClassroomsPage";
import AdminProfilePage from "../pages/adminPages/AdminProfilePage";
import EditClassPage from "../pages/adminPages/EditClassPage";
import CreateClassRequestPage from "../pages/studentPages/CreateClassRequestPage";
import TeacherClassRequestsPage from "../pages/teacherPages/TeacherClassRequestsPage";
import SubscriptionsManagementPage from "../pages/adminPages/SubscriptionsManagementPage";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const { userDetails } = useSelector((state) => state.user);

  if (!isLogin)
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    );

  if (userDetails?.role === "Student" || userDetails?.roles[0] === "Student") {
    return (
      <Router>
        <Routes>
          <Route path="/schedule" element={<ScheduleViewPage />} />
          <Route
            path="/teacher-schedule-edit"
            element={<TeacherScheduleEditPage />}
          />
          <Route path="/student-profile" element={<StudentProfilePage />} />
          <Route path="/user-subscriptions" element={<SubscriptionsPage />} />
          <Route path="/class-info" element={<ClassInfo />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route
            path="/class-request-create"
            element={<CreateClassRequestPage />}
          />
        </Routes>
      </Router>
    );
  }

  if (userDetails?.role === "Teacher" || userDetails?.roles[0] === "Teacher") {
    return (
      <Router>
        <Routes>
          <Route path="/schedule" element={<ScheduleViewPage />} />
          <Route
            path="/teacher-schedule-edit"
            element={<TeacherScheduleEditPage />}
          />
          <Route path="/teacher-profile" element={<TeacherProfilePage />} />
          <Route path="/class-info" element={<ClassInfo />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route
            path="/class-requests"
            element={<TeacherClassRequestsPage />}
          />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/schedule" element={<ScheduleViewPage />} />
        <Route
          path="/teacher-schedule-edit"
          element={<TeacherScheduleEditPage />}
        />
        <Route path="/admin-profile" element={<AdminProfilePage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/users-list" element={<StudentsListPage />} />
        <Route path="/edit-class" element={<EditClassPage />} />
        <Route path="/create-event" element={<CreateEventsPage />} />
        <Route path="/change-classrooms" element={<ChangeClassroomsPage />} />
        <Route path="/class-info" element={<ClassInfo />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route
          path="/subscriptions-management"
          element={<SubscriptionsManagementPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
