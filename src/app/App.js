import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import ScheduleViewPage from "../pages/teacherPages/ScheduleViewPage";
import ScheduleEditPage from "../pages/teacherPages/ScheduleEditPage";
import TeacherProfilePage from "../pages/teacherPages/TeacherProfilePage";
import { ClassInfo } from "../entities/Class";
import StudentProfilePage from "../pages/studentPages/StudentProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher-schedule" element={<ScheduleViewPage />} />
        <Route path="/student-schedule" element={<ScheduleViewPage />} />
        <Route path="/teacher-schedule-edit" element={<ScheduleEditPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/class-info" element={<ClassInfo />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
