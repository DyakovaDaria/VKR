import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classRequestPreviewStyles from "./ClassRequestPreview.module.css";

const ClassRequestsPreview = ({ requestInfo }) => {
  const dispatch = useDispatch();

  const handleAcceptBtnClick = () => {};

  const handleCancelRequest = () => {};

  return (
    <div className={classRequestPreviewStyles.classRequestPreviewCont}>
      <div className={classRequestPreviewStyles.requestCont}>
        <h3>{requestInfo.student}</h3>
        <p>{requestInfo.date}</p>
        <p>
          {requestInfo.startTime} - {requestInfo.endTime}
        </p>
      </div>
      <div className={classRequestPreviewStyles.btnsCont}>
        <button
          className={classRequestPreviewStyles.acceptRequestBtn}
          onClick={handleAcceptBtnClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
        </button>
        <button
          className={classRequestPreviewStyles.cancelRequestBtn}
          onClick={handleCancelRequest}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#FFFFFF"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClassRequestsPreview;
