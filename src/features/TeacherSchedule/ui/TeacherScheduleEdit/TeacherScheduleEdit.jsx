import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleClassCreationModal } from "../../model/TeacherScheduleSlice";
import { updateSchedule } from "../../../../entities/Schedule";
import { fetchTeacherScheduleForDate } from "../../../../entities/Schedule";
import {
  selectClassroom,
  setClassrooms,
} from "../../../../features/ClassroomsSettings";
import { ClassPreview } from "../../../../entities/Class";
import teacherSchedEditStyles from "./TeacherScheduleEdit.module.css";
import AddClassForm from "./addClassForm/AddClassForm";
import { useNavigate } from "react-router-dom";
import { fetchCurrUserDetails } from "../../../../entities/User";

const TeacherScheduleEdit = ({ teacherId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, classCreationMode } = useSelector(
    (state) => state.teacherSchedule
  );
  const { userDetails } = useSelector((state) => state.user);

  const { schedule } = useSelector((state) => state.schedule);

  const { selectedDate } = useSelector((state) => state.weekCalendar);

  useEffect(() => {
    dispatch(fetchCurrUserDetails());
    dispatch(
      fetchTeacherScheduleForDate({
        userId: `${userDetails.lastName} ${userDetails.firstName}`,
        date: selectedDate.toISOString().split("T")[0],
      })
    );
  }, [dispatch, selectedDate]);

  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      updateSchedule({
        schedule: schedule,
      })
    );
  };

  const handleAddNewClass = () => {
    dispatch(toggleClassCreationModal(true));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedule: {error}</p>;

  return (
    <div className={teacherSchedEditStyles.editScheduleContainer}>
      <h3>
        {selectedDate.toISOString().split("T")[0].split("-")[2]}{" "}
        {months[selectedDate.getMonth()]}
      </h3>
      <div className={teacherSchedEditStyles.classesListEdit}>
        <div className={teacherSchedEditStyles.classesList}>
          {schedule?.map((classInfo) => (
            <ClassPreview
              key={classInfo.id}
              classInfo={classInfo}
            ></ClassPreview>
          ))}
        </div>
        <button
          className={teacherSchedEditStyles.addNewClassBtn}
          onClick={handleAddNewClass}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className={teacherSchedEditStyles.saveButton} onClick={() => navigate("/schedule")}>Сохранить</button>
        <button
          className={teacherSchedEditStyles.cancelButton}
          onClick={() => navigate("/schedule")}
        >
          Отменить
        </button>
      </div>
      {classCreationMode && (
        <div className={teacherSchedEditStyles.popupOverlay}>
          {<AddClassForm></AddClassForm>}
        </div>
      )}
    </div>
  );
};

export default TeacherScheduleEdit;
