import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../../model/UserThunks";
import { clearUserDetails, setNewUserCreation } from "../../model/UserSlice";
import userEditStyles from "./UserProfileEdit.module.css";
import userProfilePic from "../../../../shared/assets/userPic.png";

const UserProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currUserDetails, setCurrUserDetails] = useState({});
  const { currentUserForChange, userDetails, loading, error, newUserCreation } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (newUserCreation) {
      setCurrUserDetails({
        id: "",
        name: "",
        role: "",
        lastName: "",
        secondName: "",
        description: "",
        email: "",
        phone: "",
        groups: [],
        pic: null,
      });
    } else {
      dispatch(fetchUserDetails(currentUserForChange));
      setCurrUserDetails({
        id: userDetails?.id,
        name: userDetails?.name,
        role: userDetails?.role,
        lastName: userDetails?.lastName,
        secondName: userDetails?.secondName,
        description: userDetails?.description,
        email: userDetails?.email,
        phone: userDetails?.phone,
        groups: userDetails?.groups,
        pic: userDetails?.pic,
      });
    }
  }, [dispatch, userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // dispatch(updateUser(userDetails));
    dispatch(clearUserDetails());
    navigate("/users-list");
  };

  const handleDelete = () => {
    // dispatch(deleteUser(currentUser.id));
    dispatch(clearUserDetails());
    navigate("/users-list");
  };

  const handleCancel = () => {
    dispatch(clearUserDetails());
    navigate("/users-list");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={userEditStyles.wrapContent}>
      <div className={userEditStyles.userInfoContainer}>
        <h2>Основная информация</h2>
        <div class={userEditStyles.profilePicCont}>
          <img
            // src={currUserDetails.pic === null ? userProfilePic : currUserDetails.pic}
            src={userProfilePic}
          />
          <button class={userEditStyles.wrapCentredContent}>
            + Добавить фото
          </button>
        </div>
        <div className={userEditStyles.enterForm}>
          <div className={userEditStyles.enterField}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите имя"
              value={currUserDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="lastName">Фамилия</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Введите фамилию"
              value={currUserDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="secondName">Отчество</label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              placeholder="Введите отчество (опционально)"
              value={currUserDetails.secondName}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Введите почту"
              value={currUserDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
              value={currUserDetails.password}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="role">Роль</label>
            <select
              name="role"
              className={userEditStyles.roleSelect}
              onChange={handleChange}
              value={currUserDetails.role}
            >
              <option value="teacher">Преподаватель</option>
              <option value="student">Ученик</option>
              <option value="admin">Администратор</option>
            </select>
          </div>
        </div>
      </div>

      <div class={userEditStyles.additionalInfoCont}>
        <div class={userEditStyles.descrCont}>
          <h2>Описание</h2>
          <textarea
            className={userEditStyles.userDescr}
            value={currUserDetails.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={userEditStyles.btnsCont}>
          <button
            className={userEditStyles.saveUserProfileButton}
            onClick={handleSave}
          >
            Сохранить
          </button>
          <button className={userEditStyles.deleteBtn} onClick={handleDelete}>
            Удалить профиль
          </button>
          <button className={userEditStyles.deleteBtn} onClick={handleCancel}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
