import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./GroupPreview.module.css";

const GroupPreview = ({ groupInfo }) => {
  return (
    <div className={styles.groupPreviewCont}>
      <h4>{groupInfo.level}</h4>
      {groupInfo.dates.map((date) => (
        <p>{date.weekDay} {date.time}</p>
      ))}
    </div>
  );
};

export default GroupPreview;
