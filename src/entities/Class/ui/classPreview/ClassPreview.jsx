import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ClassPreview.module.css";

const ClassPreview = ({ classInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.groupClassPreviewCont}>
      <div className={styles.classInfoCont}>
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
