import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSchedule,
  toggleClassCreationModal,
} from "../../../model/TeacherScheduleSlice";
import {
  selectClassroom,
  loadClassrooms,
} from "../../../../../features/ClassroomsSettings";
import addClassFormStyles from "./AddClassForm.module.css";
import moment from "moment";
import { validation } from "../../../lib/validation";

const AddClassForm = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.teacherSchedule);
  const [newClass, setNewClass] = useState({
    type: "individual",
    id: Date.now(),
    title: "",
    description: "",
    date: selectedDate,
    startTime: "",
    endTime: "",
    classroom: "",
    teacher: "",
    group: null,
    student: null,
  });
  const classrooms = useSelector((state) => state.classroom.list);
  const [startTimeMoment, setStartTime] = useState(moment().format("HH:mm"));
  const [finishTimeMoment, setFinishTime] = useState(
    moment().add(1, "hours").format("HH:mm")
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditStartTime = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({ ...prev, [name]: value }));
    setStartTime(value);
  };

  const handleEditFinishTime = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({ ...prev, [name]: value }));
    setFinishTime(value);
  };

  const getStatusClassroom = (id) => {
    const classroom = classrooms?.find((classroom) => classroom.id === id);
    if (classroom && classroom.timeSlots) {
      const slotIndex = classroom.timeSlots?.findIndex(
        (slot) =>
          slot.startTime === startTimeMoment &&
          slot.endTime === finishTimeMoment
      );
      if (slotIndex !== -1) {
        return classroom.timeSlots[slotIndex]?.status;
      } else {
        return "free";
      }
    }
    return "free";
  };

  const handleSave = (event) => {
    console.log(newClass);
    event.preventDefault();
    const validationErrors = validation(
      newClass.startTime,
      newClass.endTime,
      newClass.classroom,
      newClass.student
    );
    if (Object.keys(validationErrors).length === 0) {
      dispatch(updateSchedule(newClass));
      dispatch(toggleClassCreationModal(false));
    } else {
      // setErrors(validationErrors);

      alert("All fields must be filled out.");
    }
  };

  const handleClose = () => {
    dispatch(toggleClassCreationModal(false));
  };

  useEffect(() => {
    dispatch(loadClassrooms());
  }, [dispatch]);

  const chooseClassStyle = (classStatus) => {
    if (classStatus === "free") {
      return addClassFormStyles.freeRadioLabel;
    } else if (classStatus === "partly") {
      return addClassFormStyles.partialRadioLabel;
    }
    return addClassFormStyles.occupiedRadioLabel;
  };

  if (!classrooms) {
    return <div>Loading...</div>;
  }

  return (
    <div className={addClassFormStyles.addClassForm}>
      <form onSubmit={handleSave}>
        <h3>Время</h3>
        <div className={addClassFormStyles.timeContainer}>
          <div className={addClassFormStyles.startTimeContainer}>
            <label htmlFor="startTime">с</label>
            <input
              onChange={handleEditStartTime}
              name="startTime"
              className={addClassFormStyles.timePick}
              type="time"
              value={startTimeMoment}
            />
          </div>
          <div className={addClassFormStyles.endTimeContainer}>
            <label htmlFor="endTime">до</label>
            <input
              onChange={handleEditFinishTime}
              name="endTime"
              className={addClassFormStyles.timePick}
              type="time"
              value={finishTimeMoment}
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
                disabled={() => getStatusClassroom(classroom.id) === "occupied"}
              />
              <label
                htmlFor={classroom.id}
                class={
                  addClassFormStyles.radioLabel +
                  " " +
                  chooseClassStyle(getStatusClassroom(classroom.id))
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
        <button type="submit" class={addClassFormStyles.acceptBtn}>
          Сохранить
        </button>
        <button class={addClassFormStyles.cancelBtn} onClick={handleClose}>
          Отменить
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
