import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSchedule } from "../../model/TeacherScheduleSlice";
import { ClassPreview } from "../../../../entities/Class";
import teacherSchedEditStyles from "./TeacherScheduleEdit.module.css";

const TeacherScheduleEdit = ({ teacherId }) => {
  const dispatch = useDispatch();
  const { schedule, loading, error, selectedDate } = useSelector(
    (state) => state.teacherSchedule
  );
  const [editableSchedule, setEditableSchedule] = useState(schedule);
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
  useEffect(() => {
    if (!loading && !error) {
      setEditableSchedule(schedule);
    }
  }, [schedule, loading, error]);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      updateSchedule({
        teacherId,
        date: selectedDate,
        schedule: editableSchedule,
      })
    );
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
          {editableSchedule.map((classInfo) => (
            <ClassPreview
              key={classInfo.id}
              classInfo={classInfo}
            ></ClassPreview>
          ))}
        </div>
        <button className={teacherSchedEditStyles.addNewClassBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      <button className={teacherSchedEditStyles.saveButton}>Сохранить</button>
    </div>
  );
};

export default TeacherScheduleEdit;
