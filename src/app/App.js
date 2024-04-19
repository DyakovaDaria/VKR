import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import ScheduleViewPage from "../pages/teacherPages/ScheduleViewPage";
import ScheduleEditPage from "../pages/teacherPages/ScheduleEditPage";
import TeacherProfilePage from "../pages/teacherPages/TeacherProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher-schedule" element={<ScheduleViewPage />} />
        <Route path="/teacher-schedule-edit" element={<ScheduleEditPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
