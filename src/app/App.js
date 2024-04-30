import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import TeacherScheduleEditPage from "../pages/teacherPages/TeacherScheduleEditPage";
import TeacherProfilePage from "../pages/teacherPages/TeacherProfilePage";
import ScheduleViewPage from "../pages/scheduleViewPage/ScheduleViewPage";
import { ClassInfo } from "../entities/Class";
import StudentProfilePage from "../pages/studentPages/StudentProfilePage";
import StudentsListPage from '../pages/adminPages/StudentsListPage';
import SubscriptionsPage from '../pages/studentPages/SubscriptionsPage';
import CreateUserPage from "../pages/adminPages/CreateUserPage";
import CreateEventsPage from "../pages/adminPages/CreateEventsPage";
import ChangeClassroomsPage from "../pages/adminPages/ChangeClassroomsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/schedule" element={<ScheduleViewPage />} />
        <Route path="/teacher-schedule-edit" element={<TeacherScheduleEditPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/create-user" element={<CreateUserPage/>} />
        <Route path="/users-list" element={<StudentsListPage/>} />
        <Route path="/user-subscriptions" element={<SubscriptionsPage/>} />
        <Route path="/create-event" element={<CreateEventsPage/>} />
        <Route path="/change-classrooms" element={<ChangeClassroomsPage/>} />
        <Route path="/class-info" element={<ClassInfo />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
