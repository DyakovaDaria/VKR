import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import ScheduleViewPage from "../pages/teacherPages/ScheduleViewPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<ScheduleViewPage />} /> */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
