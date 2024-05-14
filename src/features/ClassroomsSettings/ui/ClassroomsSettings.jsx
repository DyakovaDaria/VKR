import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WeekCalendar } from "../../../widgets/weekCalendar";
import {
  addClassroom,
  deleteClassroom,
  loadClassrooms,
  updateClassroomStatus,
  getClassroomStatus,
  toggleClassroomCreationModal,
} from "../../../entities/Classroom";
import classroomsSettingsStyles from "./ClassroomsSettings.module.css";

const ClassroomsSettings = () => {
  const dispatch = useDispatch();

  const [newClassroomName, setNewClassroomName] = useState("");
  const { selectedDate } = useSelector((state) => state.weekCalendar);
  const { list, classroomCreationMode, loading, error } = useSelector(
    (state) => state.classroom
  );

  useEffect(() => {
    dispatch(loadClassrooms());
  }, [dispatch, list]);

  const [startTimeMoment, setStartTime] = useState(
    new Date(Date.now()).toISOString().split("T")[0]
  );

  const [finishTimeMoment, setFinishTime] = useState(
    new Date(Date.now()).toISOString().split("T")[0]
  );

  const onDeleteClick = (id) => {
    dispatch(deleteClassroom(id));
  };

  const onCreateClick = () => {
    setNewClassroomName("");
    dispatch(toggleClassroomCreationModal(true));
  };

  const onSaveClassroomClick = () => {
    console.log(newClassroomName);
    const id =
      !isNaN(parseFloat(newClassroomName)) && isFinite(newClassroomName)
        ? parseFloat(newClassroomName)
        : Date.now();
    dispatch(addClassroom({ newClassroomName, id }));
    dispatch(toggleClassroomCreationModal(false));
  };

  const exitClassromCreationModal = () => {
    dispatch(toggleClassroomCreationModal(false));
  };

  const handleStatusChange = (classroomId, date, startTime, endTime, status) => {
    const newDate = date.toISOString().split("T")[0];
    dispatch(updateClassroomStatus({ id: classroomId, status: status, date: newDate, startTime, finishTime: endTime }));
  };

  const getStatusClassroom = (id) => {
    const classroom = list?.find((classroom) => classroom.id === id);
    if (classroom && classroom.timeSlots) {
      const slotIndex = classroom.timeSlots?.findIndex(
        (slot) =>
          slot.startTime === startTimeMoment &&
          slot.endTime === finishTimeMoment &&
          slot.date === selectedDate.toISOString().split("T")[0]
      );
      if (slotIndex !== -1) {
        return classroom.timeSlots[slotIndex].status;
      } else {
        return "free";
      }
    }
    return "free";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading classrooms: {error}</p>;

  return (
    <div className={classroomsSettingsStyles.classroomsSettingsCont}>
      <WeekCalendar></WeekCalendar>
      <div className={classroomsSettingsStyles.timeContainer}>
        <div className={classroomsSettingsStyles.startTimeContainer}>
          <label htmlFor="startTime">с</label>
          <input
            name="startTime"
            className={classroomsSettingsStyles.timePick}
            type="time"
            value={startTimeMoment}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className={classroomsSettingsStyles.endTimeContainer}>
          <label htmlFor="endTime">до</label>
          <input
            name="endTime"
            className={classroomsSettingsStyles.timePick}
            type="time"
            value={finishTimeMoment}
            onChange={(e) => setFinishTime(e.target.value)}
          />
        </div>
      </div>
      <div className={classroomsSettingsStyles.classroomsListCont}>
        <div className={classroomsSettingsStyles.classroomsList}>
          {list &&
            list.map((classroom) => (
              <div className={classroomsSettingsStyles.classroomCont}>
                <button
                  className={classroomsSettingsStyles.removeClassroomBtn}
                  onClick={() => onDeleteClick(classroom.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                    />
                  </svg>
                </button>
                <p>{classroom.name}</p>
                <select
                  name="classroomStatus"
                  id="classroomStatus"
                  value={getStatusClassroom(classroom.id)}
                  onChange={(e) => handleStatusChange(classroom.id, selectedDate, startTimeMoment, finishTimeMoment, e.value)}
                  className={classroomsSettingsStyles.classStatusSelect}
                >
                  <option value="free">Свободный</option>
                  <option value="busy">Полный</option>
                  <option value="partly">Частично загружен</option>
                </select>
              </div>
            ))}
        </div>
        <button
          className={classroomsSettingsStyles.addNewClassroomBtn}
          onClick={onCreateClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      {classroomCreationMode && (
        <div className={classroomsSettingsStyles.popupOverlay}>
          <div className={classroomsSettingsStyles.createNewClassCont}>
            <div className={classroomsSettingsStyles.classNameInpCont}>
              <label htmlFor="newClassName">Название класса: </label>
              <input
                name="newClassName"
                type="text"
                value={newClassroomName}
                onChange={(e) => setNewClassroomName(e.target.value)}
              />
            </div>
            <div className={classroomsSettingsStyles.newClassroomBtnCont}>
              <button
                className={classroomsSettingsStyles.saveNewClassroomBtn}
                onClick={onSaveClassroomClick}
              >
                Сохранить
              </button>
              <button
                onClick={exitClassromCreationModal}
                className={classroomsSettingsStyles.cancelNewClassroomBtn}
              >
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassroomsSettings;
