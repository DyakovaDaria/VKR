import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../../model/UserThunks";
import userEditStyles from "./UserProfileEdit.module.css";
import userProfilePic from "../../../../shared/assets/userPic.png";

const UserProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUserForChange, userDetails, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchUserDetails(currentUserForChange));
  }, [dispatch, currentUserForChange]);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // dispatch(updateUser(userDetails));
    navigate("/users-list");
  };

  const handleDelete = () => {
    // dispatch(deleteUser(currentUser.id));
    navigate("/users-list");
  };

  const handleCancel = () => {
    navigate("/users-list");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userDetails) return <div>No User Details Found</div>;

  return (
    <div className={userEditStyles.wrapContent}>
      <div className={userEditStyles.userInfoContainer}>
        <h2>Основная информация</h2>
        <div class={userEditStyles.profilePicCont}>
          <img
            // src={userDetails.pic === null ? userProfilePic : userDetails.pic}
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
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Введите фамилию"
              value={userDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={userEditStyles.enterField}>
            <label htmlFor="midname">Отчество</label>
            <input
              type="text"
              id="midname"
              name="midname"
              placeholder="Введите отчество (опционально)"
              value={userDetails.secondName}
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
              value={userDetails.email}
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
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div class={userEditStyles.additionalInfoCont}>
        <div class={userEditStyles.descrCont}>
          <h2>Описание</h2>
          <textarea className={userEditStyles.userDescr}></textarea>
        </div>

        <div className={userEditStyles.btnsCont}>
          <button
            className={userEditStyles.saveUserProfileButton}
            onClick={handleSave}
          >
            Сохранить
          </button>
          {/* <button className={userEditStyles.deleteBtn} onClick={handleDelete}>
          Удалить профиль
        </button> */}
          <button className={userEditStyles.deleteBtn} onClick={handleCancel}>
            Отменить
          </button>
          <button className={userEditStyles.settingsBtn}>
            Изменить расписание
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
