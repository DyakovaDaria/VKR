import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classRequestsListStyles from "./ClassRequestsView.module.css";
import { ClassRequestsPreview } from "../../../entities/ClassRequest";

const ClassRequestsView = () => {
  const dispatch = useDispatch();
  const { requests, loading, error } = useSelector(
    (state) => state.requestsList
  );

  const acceptRequest = () => {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedule: {error}</p>;

  return (
    <div className={classRequestsListStyles.classRequestsListCont}>
      <div className={classRequestsListStyles.requestsList}>
        {requests.map((requestInfo) => (
          <ClassRequestsPreview
            requestInfo={requestInfo}
          ></ClassRequestsPreview>
        ))}
      </div>
    </div>
  );
};

export default ClassRequestsView;
