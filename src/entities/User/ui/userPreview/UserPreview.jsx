import React, { useState, useEffect } from "react";
import userPreviewStyles from "./UserPreview.module.css";
import { useNavigate } from "react-router-dom";

const UserPreview = ({ user }) => {
  const navigate = useNavigate();
  const handleEditClick = (userId) => {
    // dispatch(setCurrentUser(userId));
    navigate("/admin/user-edit");
  };
  return (
    <div className={userPreviewStyles.userField} key={user.id}>
      <h3>
        {user.name} {user.lastName} {user.secondName}
      </h3>
      <p className={userPreviewStyles.userRole}>
        {user.role === "teacher" ? "преподаватель" : "ученик"}
      </p>
      <button onClick={() => handleEditClick(user.id)}>
        <svg
          className={userPreviewStyles.editPic}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffffff"
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserPreview;
