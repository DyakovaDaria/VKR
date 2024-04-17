import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EventPreview.module.css";

const EventPreview = ({ eventInfo, isFirstEventFlag }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={
        isFirstEventFlag
          ? styles.firstEventPreviewCont
          : styles.eventPreviewCont
      }
    >
        <div className={isFirstEventFlag
          ? styles.firstEventImgContainer
          : styles.eventImgContainer}>
            <img src={eventInfo.pic}/>
        </div>
        <div>
            <h3>{eventInfo.name}</h3>
            <p>{eventInfo.date}</p>
        </div>
    </div>
  );
};

export default EventPreview;
