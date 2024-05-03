import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
} from "../../model/ClassSlice";
import classInfoStyles from "./ClassInfo.module.css";
import { fetchUserDetails, updateUserDetails } from "../../../User";

const ClassInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, user } = useSelector((state) => state.login);
  const lesson = useSelector((state) => state.class.lesson);
  const { userDetails } = useSelector((state) => state.user);
  const [currSchedule, setCurrSchedule] = useState([]);

  const goBack = () => {
    navigate("/main-page");
  };

  const handleEditClick = () => {
    navigate("/edit-class");
  };

  const handleDeleteClick = () => {
    // navigate("/teacher-schedule-edit", { state: { teacherId: teacherId } });
  };

  const handleCancelClassClick = () => {
    setCurrSchedule(
      currSchedule.filter((curClass) => curClass.id !== lesson.id)
    );
    dispatch(updateUserDetails({ user, currSchedule }));
  };

  const checkSchedule = (id) => {
    const classExists = currSchedule.some((slot) => slot.id === id);
    return classExists;
  };

  useEffect(() => {
    dispatch(fetchUserDetails(user));
    const schedule = userDetails.schedule;
    if (schedule) {
      setCurrSchedule(schedule);
    }
  }, [dispatch, userDetails]);

  return (
    <div className={classInfoStyles.classInfoCont}>
      <button className={classInfoStyles.goBackBtn} onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classInfoStyles.icon}
          viewBox="0 0 320 512"
        >
          <path
            fill="#dc0d7a"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
        Назад
      </button>
      <div className={classInfoStyles.classInfoWrapCont}>
        <div className={classInfoStyles.classInfoWrap}>
          <h3>{lesson.title}</h3>
          <p>
            {lesson.startTime} - {lesson.endTime}
          </p>
          <p>Зал {lesson.classroom}</p>
        </div>
        <div className={classInfoStyles.classInfoWrap}>
          <h3 name="teacher">{lesson.teacher}</h3>
          <label htmlFor="teacher">преподаватель</label>
        </div>
        <div className={classInfoStyles.classInfoWrap}>
          {lesson?.type === "group" && <p>Групповое занятие</p>}
          {lesson?.type === "individual" && <p>Индивидуальное занятие</p>}
          {lesson?.group && <p>{lesson.group}</p>}
          {lesson?.student && <p>{lesson.student}</p>}
          {role === "student" && checkSchedule(lesson.id) && (
            <div className={classInfoStyles.studentClassStatus}>
              <p>Вы записаны</p>
            </div>
          )}
        </div>
      </div>
      {role === "admin" && (
        <div className={classInfoStyles.adminEditBtns}>
          <button
            className={classInfoStyles.editScheduleBtn}
            onClick={handleEditClick}
          >
            Изменить информацию
          </button>
          <button
            className={classInfoStyles.deleteClassBtn}
            onClick={handleDeleteClick}
          >
            Удалить занятие
          </button>
        </div>
      )}
      {role === "student" && checkSchedule(lesson.id) && (
        <div className={classInfoStyles.adminEditBtns}>
          <button
            className={classInfoStyles.cancelClassBtn}
            onClick={handleCancelClassClick}
          >
            Отменить запись
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassInfo;
