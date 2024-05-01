import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userProfileStyles from "./UserProfile.module.css";
import { fetchUserDetails } from "../../model/UserThunks";
import GroupPreview from "../../../Group/ui/groupPreview/GroupPreview";
import userProfilePic from "../../../../shared/assets/userPic.png";

function UserProfile() {
  const dispatch = useDispatch();
  const { role, user } = useSelector((state) => state.login);
  const { userDetails, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserDetails(user));
  }, [dispatch, user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userDetails) return <div>No User Details Found</div>;

  return (
    <div className={userProfileStyles.userProfileCont}>
      <div className={userProfileStyles.userInfoCont}>
        <img
          src={userDetails.pic ? userDetails.pic : userProfilePic}
          className={userProfileStyles.profilePic}
        />
        <h3>
          {userDetails.lastName} {userDetails.name} {userDetails.secondName}
        </h3>
        <p>{role === "student" ? "Студент" : "Преподаватель"}</p>
        <p className={userProfileStyles.contactText}>контактные данные</p>
        <p>
          <strong> {userDetails.email}</strong>
        </p>
        <p>
          <strong>{userDetails.phone}</strong>{" "}
        </p>
      </div>
      <div className={userProfileStyles.userAdditionalInfoCont}>
        <div className={userProfileStyles.userDescriptionCont}>
          <h3> Описание </h3>
          <div className={userProfileStyles.userDescriptionText}>
            <p>{userDetails.description}</p>
          </div>
        </div>
        <div className={userProfileStyles.userGroupsCont}>
          <h3>Группы</h3>
          <div className={userProfileStyles.userGroupsListCont}>
            {userDetails.groups.map((group) => (
              <GroupPreview groupInfo={group}></GroupPreview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
