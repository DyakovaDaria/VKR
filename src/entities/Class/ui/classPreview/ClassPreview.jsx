import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLessonDetails } from "../../model/ClassSlice";
import { useNavigate } from "react-router-dom";
import classPreviewStyles from "./ClassPreview.module.css";

const ClassPreview = ({ classInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(setLessonDetails(classInfo));
    navigate('/class-info');
  };

  return (
    <div className={classPreviewStyles.groupClassPreviewCont} onClick={handleOnClick}>
      <div className={classPreviewStyles.classInfoCont}>
        <h3>{classInfo.title}</h3>
        <p>
          {classInfo.startTime} - {classInfo.endTime}
        </p>
        <p>Зал {classInfo.classroom}</p>
        {classInfo.group && <p>{classInfo.group}</p>}
        {classInfo.student && <p>{classInfo.student}</p>}
      </div>
    </div>
  );
};

export default ClassPreview;
