import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserProfile.module.css";
import { fetchUserDetails } from "../../model/UserThunks";
import GroupPreview from "../../../Group/ui/groupPreview/GroupPreview";
import userProfilePic from "../../../../shared/assets/userPic.png";

function UserProfile({ userId }) {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.login);
  const { userDetails, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserDetails(userId));
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userDetails) return <div>No User Details Found</div>;

  return (
    <div className={styles.userProfileCont}>
      <div className={styles.userInfoCont}>
        <img src={userDetails.pic ? userDetails.pic : userProfilePic} />
        <h3>
          {userDetails.lastName} {userDetails.name} {userDetails.secondName}
        </h3>
        <p>{role === "student" ? "Студент" : "Преподаватель"}</p>
        <p className={styles.contactText}>контактные данные</p>
        <p>
          <strong> {userDetails.email}</strong>
        </p>
        <p>
          <strong>{userDetails.phone}</strong>{" "}
        </p>
      </div>
      <div className={styles.userAdditionalInfoCont}>
        <div className={styles.userDescriptionCont}>
          <h3> Описание </h3>
          <div className={styles.userDescriptionText}>
            <p>{userDetails.description}</p>
          </div>
        </div>
        <div className={styles.userGroupsCont}>
          <h3>Группы</h3>
          <div className={styles.userGroupsListCont}>
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
