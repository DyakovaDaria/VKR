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

const ClassInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lesson = useSelector((state) => state.class.lesson);
  const goBack = () => {
    navigate("/main-page");
  };
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
          {lesson.type === "group" && <p>Групповое занятие</p>}
          {lesson.type === "individual" && <p>Индивидуальное занятие</p>}
          {lesson.group && <p>{lesson.group}</p>}
          {lesson.student && <p>{lesson.student}</p>}
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
