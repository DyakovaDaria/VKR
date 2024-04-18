import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EventPreview.module.css";

const EventPreview = ({ eventInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.eventPreviewCont}>
      <div className={styles.eventImgContainer}>
        {/* <img src={eventInfo.pic}/> */}
      </div>
      <div className={styles.eventInfoCont}>
        <h3>{eventInfo.name}</h3>
        <p>{eventInfo.date}</p>
      </div>
    </div>
  );
};

export default EventPreview;
