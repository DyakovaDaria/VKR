import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userEditStyles from "./UserProfileEdit.module.css";
import userProfilePic from "../../../../shared/assets/userPic.png";

const UserProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const currentUser = useSelector((state) => state.users.currentUser);
  const currentUser = null;
  const [userDetails, setUserDetails] = useState({
    id: currentUser?.id || "",
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    password: currentUser?.password || "",
  });

  useEffect(() => {
    if (currentUser) {
      setUserDetails({
        id: currentUser.id,
        name: currentUser.name,
        surname: currentUser.surname,
        midname: currentUser.midname,
        email: currentUser.email,
        password: currentUser.password,
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // dispatch(updateUser(userDetails));
    navigate("/users-list");
  };

  const handleDelete = () => {
    // dispatch(deleteUser(currentUser.id));
    navigate("/users-list");
  };

  return (
    <div className={userEditStyles.wrapContent}>
      <div className={userEditStyles.userInfoContainer}>
        <h2>Основная информация</h2>
        <div class={userEditStyles.profilePicCont}>
          <img src={userProfilePic} />
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
              value={userDetails.surname}
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
              value={userDetails.midname}
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

      <div class={userEditStyles.achievementsCont}></div>

      <div className={userEditStyles.btnsCont}>
        <button className={userEditStyles.settingsBtn}>
          Назначить достижение
        </button>
        <button
          className={userEditStyles.saveUserProfileButton}
          onClick={handleSave}
        >
          Сохранить
        </button>
        <button className={userEditStyles.settingButton} onClick={handleDelete}>
          Удалить профиль
        </button>
      </div>
    </div>
  );
};

export default UserProfileEdit;
