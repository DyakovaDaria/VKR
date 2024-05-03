import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLessonDetails } from "../../model/ClassSlice";
import { useNavigate } from "react-router-dom";
import classPreviewStyles from "./ClassPreview.module.css";
import { fetchUserDetails } from "../../../User";

const ClassPreview = ({ classInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, user } = useSelector((state) => state.login);
  const { userDetails } = useSelector((state) => state.user);
  const [currSchedule, setCurrSchedule] = useState([]);

  const handleOnClick = () => {
    dispatch(setLessonDetails(classInfo));
    navigate("/class-info");
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
    <div className={classPreviewStyles.classPrevCont}>
      <div
        className={
          classInfo?.type === "group"
            ? classPreviewStyles.groupClassPreviewCont
            : classPreviewStyles.indClassPreviewCont
        }
        onClick={handleOnClick}
      >
        <div className={classPreviewStyles.classInfoCont}>
          <h3>{classInfo.title}</h3>
          <p>
            {classInfo.startTime} - {classInfo.endTime}
          </p>
          <p>Зал {classInfo.classroom}</p>
          {classInfo.group && <p>{classInfo.group}</p>}
          {classInfo.student && <p>{classInfo.student}</p>}
        </div>
        {role === "student" && checkSchedule(classInfo.id) && (
          <div className={classPreviewStyles.studentClassStatus}>
            <p>Вы записаны</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassPreview;
