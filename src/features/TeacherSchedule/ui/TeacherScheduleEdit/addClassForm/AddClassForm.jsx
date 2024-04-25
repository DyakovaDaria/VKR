import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSchedule,
  toggleClassCreationModal,
} from "../../../model/TeacherScheduleSlice";
import {
  selectClassroom,
  loadClassrooms,
} from "../../../../../entities/Classroom";
import addClassFormStyles from "./AddClassForm.module.css";

const AddClassForm = () => {
  const dispatch = useDispatch();
  const [newClass, setNewClass] = useState({
    type: "individual",
    id: Date.now,
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    classroom: "",
    teacher: "",
    group: null,
    student: null,
  });
  const classrooms = useSelector((state) => state.classroom.list);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(newClass);
    // dispatch(addClass({ teacherId, date, classData }));
    dispatch(toggleClassCreationModal(false));
  };

  const handleClose = () => {
    dispatch(toggleClassCreationModal(false));
  };

  React.useEffect(() => {
    dispatch(loadClassrooms());
  }, [dispatch]);

  const chooseClassStyle = (classStatus) => {
    if (classStatus === "free") {
      return addClassFormStyles.freeRadioLabel;
    } else if (classStatus === "partial") {
      return addClassFormStyles.partialRadioLabel;
    }
    return addClassFormStyles.occupiedRadioLabel;
  };

  if (!classrooms) {
    return <div>Loading...</div>;
  }

  return (
    <div className={addClassFormStyles.addClassForm}>
      <form>
        <h3>Время</h3>
        <div className={addClassFormStyles.timeContainer}>
          <div className={addClassFormStyles.startTimeContainer}>
            <label htmlFor="startTime">с</label>
            <input
              onChange={handleInputChange}
              name="startTime"
              className={addClassFormStyles.timePick}
              type="time"
            />
          </div>
          <div className={addClassFormStyles.endTimeContainer}>
            <label htmlFor="endTime">до</label>
            <input
              onChange={handleInputChange}
              name="endTime"
              className={addClassFormStyles.timePick}
              type="time"
            />
          </div>
        </div>
        <h3>Зал</h3>
        <div className={addClassFormStyles.classroomsContainer}>
          {classrooms.map((classroom) => (
            <div className={addClassFormStyles.classroomContainer}>
              <input
                type="radio"
                id={classroom.id}
                name="classroom"
                value={classroom.id}
                onChange={handleInputChange}
                class={addClassFormStyles.radioButton}
                disabled={classroom.status === "occupied"}
              />
              <label
                htmlFor={classroom.id}
                class={
                  addClassFormStyles.radioLabel +
                  " " +
                  chooseClassStyle(classroom.status)
                }
              >
                {classroom.name}
              </label>
            </div>
          ))}
        </div>
        <h3>Ученик</h3>
        <input
          type="text"
          class={addClassFormStyles.studentNameInp}
          name="student"
          onChange={handleInputChange}
          placeholder="Введите ФИО Ученика"
        />
        <button class={addClassFormStyles.acceptBtn} onClick={handleSave}>Сохранить</button>
        <button class={addClassFormStyles.cancelBtn} onClick={handleClose}>
          Отменить
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
