import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchScheduleForDate } from "../../../entities/Schedule/model/ScheduleThunks";
import { ClassPreview, toggleNewLessonCreation } from "../../../entities/Class";
import { WeekCalendar } from "../../../widgets/weekCalendar";
import schedStyles from "./ScheduleView.module.css";

const ScheduleView = ({ teacherId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.user);
  const { schedule, loading, error } = useSelector(
    (state) => state.schedule
  );

  const { selectedDate } = useSelector((state) => state.weekCalendar);

  const handleEditClick = () => {
    navigate("/teacher-schedule-edit", { state: { teacherId: teacherId } });
  };

  const createNewLesson = () => {
    dispatch(toggleNewLessonCreation(true));
    navigate("/edit-class");
  };

  useEffect(() => {
    dispatch(
      fetchScheduleForDate({
        teacherId: "123",
        date: selectedDate.toISOString().split("T")[0],
      })
    );
  }, [selectedDate, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedule: {error}</p>;

  return (
    <div className={schedStyles.teacherScheduleCont}>
      <WeekCalendar></WeekCalendar>
      <div className={schedStyles.classesList}>
        {schedule.map((classInfo) => (
          <ClassPreview key={classInfo.id} classInfo={classInfo}></ClassPreview>
        ))}
      </div>
      {userDetails?.role === "Administrator" || userDetails?.roles[0] && (
        <button
          className={schedStyles.editScheduleBtn}
          onClick={handleEditClick}
        >
          <svg
            className={schedStyles.editSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffff"
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
        </button>
      )}
      {/* TODO пофиксить могут сломаться роли */}
      {userDetails?.role === "Administrator" || userDetails?.roles[0] && (
        <button
          className={schedStyles.addNewClassBtn}
          onClick={createNewLesson}
        >
          Создать занятие
        </button>
      )}
    </div>
  );
};

export default ScheduleView;
