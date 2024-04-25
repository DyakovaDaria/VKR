import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import eventPrevStyles from "./EventPreview.module.css";
import eventPic1 from '../../../shared/assets/eventPic1.png';
import eventPic2 from '../../../shared/assets/eventPic2.png';
import eventPic3 from '../../../shared/assets/eventPic2.png';

const EventPreview = ({ eventInfo }) => {
  const dispatch = useDispatch();
  const pics = [eventPic1, eventPic2, eventPic3];
  return (
    <div className={eventPrevStyles.eventPreviewCont}>
      <div className={eventPrevStyles.eventImgContainer}>
        <img src={eventInfo.pic ? eventInfo.pic : pics[ Math.floor(Math.random() * pics.length)]}/>
      </div>
      <div className={eventPrevStyles.eventInfoCont}>
        <h3>{eventInfo.name}</h3>
        <p>{eventInfo.date}</p>
      </div>
    </div>
  );
};

export default EventPreview;
