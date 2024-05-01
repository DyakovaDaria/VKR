import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
} from "../../model/ClassSlice";
import classSettingsStyles from "./EditClass.module.css";

const EditClass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.login);
  const lesson = useSelector((state) => state.class.lesson);
  const handleEditClick = () => {
    // navigate("/teacher-schedule-edit", { state: { teacherId: teacherId } });
  };
  const handleCancelClick = () => {
    navigate("/class-info");
  };
  const handleChange = (e) => {};
  return (
    <div className={classSettingsStyles.classInfoCont}>
      <div className={classSettingsStyles.classInfoWrapCont}>
        <div className={classSettingsStyles.classInfoWrap}>
          <div>
            <label htmlFor="lessonTitle">Название урока: </label>
            <input type="text" name="lessonTitle" value={lesson.title} />
          </div>
          <div>
            <label htmlFor="lessonStartTime">Начало урока: </label>
            <input
              name="lessonStartTime"
              type="time"
              value={lesson.startTime}
            />
            <label htmlFor="lessonFinishTime">Конец урока: </label>
            <input name="lessonFinishTime" value={lesson.endTime} type="time" />
          </div>
          <div>
            <label htmlFor="lessonClassroom">Зал: </label>
            <input
              type="number"
              name="lessonClassroom"
              value={lesson.classroom}
            />
          </div>
        </div>
        <div className={classSettingsStyles.classInfoWrap}>
          <div>
            <label htmlFor="lessonTeacher">Преподаватель: </label>
            <input type="text" name="lessonTeacher" value={lesson.teacher} />
          </div>
        </div>
        <div className={classSettingsStyles.classInfoWrap}>
          <div>
            <label htmlFor="lessonType">Тип урока: </label>
            <select name="lessonType" value={lesson.type}>
              <option value="group">Групповое занятие</option>
              <option value="individual">Индивидуальное занятие</option>
            </select>
          </div>
          {lesson?.group && <p>{lesson.group}</p>}
          {lesson?.student && <p>{lesson.student}</p>}
        </div>
      </div>
      {role === "admin" && (
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
      )}
    </div>
  );
};

export default EditClass;
