import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectClassroom,
  loadClassrooms,
} from "../../../../features/ClassroomsSettings";
import createRequestStyles from "./CreateRequestForm.module.css";
import { validation } from "../../lib/validation";

const CreateRequestForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const classrooms = useSelector((state) => state.classroom.list);
  const [newClass, setNewClass] = useState({
    type: "individual",
    id: Date.now(),
    title: "",
    description: "",
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    classroom: "",
    teacher: "",
    group: null,
    student: user,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({ ...prev, [name]: value }));
  };

  const getStatusClassroom = (id) => {
    const classroom = classrooms?.find((classroom) => classroom.id === id);
    if (classroom && classroom.timeSlots) {
      const slotIndex = classroom.timeSlots?.findIndex(
        (slot) =>
          slot.startTime === newClass.startTime &&
          slot.endTime === newClass.endTime
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
    event.preventDefault();
    const validationErrors = validation(newClass);
    if (Object.keys(validationErrors).length === 0) {
      //   dispatch(updateSchedule(newClass));
      //   dispatch(toggleClassCreationModal(false));
      setNewClass({
        type: "individual",
        id: Date.now(),
        title: "",
        description: "",
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        classroom: "",
        teacher: "",
        group: null,
        student: user,
      });
    } else {
      // setErrors(validationErrors);
      alert("All fields must be filled out.");
    }
  };

  const handleClose = () => {
    // dispatch(toggleClassCreationModal(false));
  };

  useEffect(() => {
    dispatch(loadClassrooms());
  }, [dispatch]);

  const chooseClassStyle = (classStatus) => {
    if (classStatus === "free") {
      return createRequestStyles.freeRadioLabel;
    } else if (classStatus === "partly") {
      return createRequestStyles.partialRadioLabel;
    }
    return createRequestStyles.occupiedRadioLabel;
  };

  if (!classrooms) {
    return <div>Loading...</div>;
  }

  return (
    <div className={createRequestStyles.addClassForm}>
      <form onSubmit={handleSave}>
        <h3>Дата</h3>
        <div className={createRequestStyles.dateContainer}>
          <input
            onChange={handleInputChange}
            name="date"
            className={createRequestStyles.datePick}
            type="date"
            value={newClass.date}
          />
        </div>
        <h3>Время</h3>
        <div className={createRequestStyles.timeContainer}>
          <div className={createRequestStyles.startTimeContainer}>
            <label htmlFor="startTime">с</label>
            <input
              onChange={handleInputChange}
              name="startTime"
              className={createRequestStyles.timePick}
              type="time"
              value={newClass.startTime}
            />
          </div>
          <div className={createRequestStyles.endTimeContainer}>
            <label htmlFor="endTime">до</label>
            <input
              onChange={handleInputChange}
              name="endTime"
              className={createRequestStyles.timePick}
              type="time"
              value={newClass.endTime}
            />
          </div>
        </div>
        <h3>Зал</h3>
        <div className={createRequestStyles.classroomsContainer}>
          {classrooms.map((classroom) => (
            <div className={createRequestStyles.classroomContainer}>
              <input
                type="radio"
                id={classroom.id}
                name="classroom"
                value={classroom.id}
                onChange={handleInputChange}
                class={createRequestStyles.radioButton}
                disabled={() => getStatusClassroom(classroom.id) === "occupied"}
              />
              <label
                htmlFor={classroom.id}
                class={
                  createRequestStyles.radioLabel +
                  " " +
                  chooseClassStyle(getStatusClassroom(classroom.id))
                }
              >
                {classroom.name}
              </label>
            </div>
          ))}
        </div>
        <h3>Преподаватель</h3>
        <input
          type="text"
          class={createRequestStyles.studentNameInp}
          name="teacher"
          onChange={handleInputChange}
          placeholder="Введите ФИО преподавателя"
        />
        <button type="submit" class={createRequestStyles.acceptBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default CreateRequestForm;
