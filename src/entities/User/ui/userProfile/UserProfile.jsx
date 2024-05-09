import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userProfileStyles from "./UserProfile.module.css";
import { fetchCurrUserDetails, fetchUserGroups } from "../../model/UserThunks";
import GroupPreview from "../../../Group/ui/groupPreview/GroupPreview";
import userProfilePic from "../../../../shared/assets/userPic.png";

function UserProfile() {
  const dispatch = useDispatch();
  const { userDetails, groups, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchCurrUserDetails());
    dispatch(fetchUserGroups());
  }, [dispatch]);

  const chooseRole = (role) => {
    if (role === "Administrator") {
      return "Администратор";
    } else if (role === "Student") {
      return "Ученик";
    } else {
      return "Преподаватель";
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userDetails) return <div>No User Details Found</div>;

  return (
    <div className={userProfileStyles.userProfileCont}>
      <div className={userProfileStyles.userInfoCont}>
        <img
          src={userDetails?.photo ? userDetails.photo : userProfilePic}
          className={userProfileStyles.profilePic}
        />
        <h3>
          {userDetails.lastName} {userDetails.firstName} {userDetails.middleName}
        </h3>
        <p>{chooseRole(userDetails.roles[0])}</p>
        <p className={userProfileStyles.contactText}>контактные данные</p>
        <p>
          <strong> {userDetails?.email}</strong>
        </p>
        <p>
          <strong>{userDetails?.phoneNumber}</strong>
        </p>
      </div>
      <div className={userProfileStyles.userAdditionalInfoCont}>
        <div className={userProfileStyles.userDescriptionCont}>
          <h3> Описание </h3>
          <div className={userProfileStyles.userDescriptionText}>
            <p>
              {userDetails.description
                ? userDetails.description
                : "Описания пока нет."}
            </p>
          </div>
        </div>
        <div className={userProfileStyles.userGroupsCont}>
          <h3>Группы</h3>
          <div className={userProfileStyles.userGroupsListCont}>
            {groups &&
              groups.map((group) => (
                <GroupPreview groupInfo={group}></GroupPreview>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
