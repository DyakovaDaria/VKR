import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
  toggleNewLessonCreation,
} from "../../model/ClassSlice";
import { validation } from "../../lib/validation";
import { updateSchedule } from "../../../Schedule";
import classSettingsStyles from "./EditClass.module.css";

const EditClass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lesson, newLessonCreation } = useSelector((state) => state.class);
  const [currLesson, setCurrLesson] = useState({});

  useEffect(() => {
    if (newLessonCreation) {
      setCurrLesson({
        type: null,
        id: Date.now(),
        title: "",
        description: "",
        startTime: "",
        endTime: "",
        classroom: "",
        type: "group",
        teacher: "",
        group: null,
        student: null,
      });
    } else {
      // dispatch(fetchUserDetails(currentUserForChange));
      setCurrLesson({
        type: lesson?.type,
        id: lesson?.id,
        title: lesson?.title,
        description: lesson?.description,
        startTime: lesson?.startTime,
        endTime: lesson?.endTime,
        classroom: lesson?.classroom,
        type: lesson?.type,
        teacher: lesson?.teacher,
        group: lesson?.group,
        student: lesson?.student,
      });
    }
  }, [dispatch, lesson]);

  const handleEditClick = (event) => {
    event.preventDefault();
    const validationErrors = validation(currLesson);
    if (Object.keys(validationErrors).length === 0) {
      if (newLessonCreation) {
        dispatch(updateSchedule(currLesson));
        dispatch(toggleNewLessonCreation(false));
        navigate("/schedule");
      } else {
        dispatch(setLessonDetails({ ...currLesson }));
        navigate("/class-info");
      }
    } else {
      alert("All fields must be filled out.");
    }
  };

  const handleCancelClick = () => {
    navigate("/class-info");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrLesson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classSettingsStyles.classInfoCont}>
      <div className={classSettingsStyles.classInfoWrapCont}>
        <div className={classSettingsStyles.classInfoWrap}>
          <label htmlFor="title">Название урока: </label>
          <input
            type="text"
            name="title"
            value={currLesson.title}
            onChange={handleChange}
          />
        </div>
        <div className={classSettingsStyles.classTimeWrap}>
          <div className={classSettingsStyles.timeInpWrap}>
            <label htmlFor="startTime">Начало урока: </label>
            <input
              name="startTime"
              type="time"
              value={currLesson.startTime}
              onChange={handleChange}
            />
          </div>
          <div className={classSettingsStyles.timeInpWrap}>
            <label htmlFor="endTime">Конец урока: </label>
            <input
              name="endTime"
              value={currLesson.endTime}
              type="time"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classSettingsStyles.classInfoWrap}>
          <label htmlFor="classroom">Зал: </label>
          <input
            type="number"
            name="classroom"
            value={currLesson.classroom}
            onChange={handleChange}
          />
        </div>
        <div className={classSettingsStyles.classInfoWrap}>
          <label htmlFor="teacher">Преподаватель: </label>
          <input
            type="text"
            name="teacher"
            value={currLesson.teacher}
            onChange={handleChange}
          />
        </div>
        <div className={classSettingsStyles.classInfoWrap}>
          <label htmlFor="type">Тип урока: </label>
          <select name="type" value={currLesson.type} onChange={handleChange}>
            <option value="group">Групповое занятие</option>
            <option value="individual">Индивидуальное занятие</option>
          </select>
        </div>
        {currLesson.type === "group" && (
          <div className={classSettingsStyles.classInfoWrap}>
            <label htmlFor="group">Группа: </label>
            <input
              type="text"
              name="group"
              value={currLesson.group}
              onChange={handleChange}
            />
          </div>
        )}
        {currLesson.type === "individual" && (
          <div className={classSettingsStyles.classInfoWrap}>
            <label htmlFor="student">Студент: </label>
            <input
              type="text"
              name="student"
              value={currLesson.student}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classSettingsStyles.adminEditBtns}>
        <button
          className={classSettingsStyles.editScheduleBtn}
          onClick={handleEditClick}
        >
          Сохранить
        </button>
        <button
          className={classSettingsStyles.deleteClassBtn}
          onClick={handleCancelClick}
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default EditClass;
