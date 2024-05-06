import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails, registerTeacher } from "../../model/UserThunks";
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
        userId: Date.now(),
        firstName: "",
        role: "Teacher",
        roles: ["Teacher"],
        lastName: "",
        middleName: "",
        email: "",
        phoneNumber: "",
        photo: null,
        description: '',
      });
    } else {
      dispatch(fetchUserDetails(currentUserForChange));
      setCurrUserDetails(userDetails);
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') {
      setCurrUserDetails((prev) => ({ ...prev, roles: [value] }));
    }
    setCurrUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (newUserCreation && currUserDetails.role === 'Teacher') {
      console.log('registration');
      dispatch(registerTeacher(currUserDetails));
    }
    console.log(error);
    // dispatch(clearUserDetails());
    // navigate("/users-list");
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
            <label htmlFor="firstName">Имя</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
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
            <label htmlFor="middleName">Отчество</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
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
              <option value="Teacher">Преподаватель</option>
              <option value="Student">Ученик</option>
              <option value="Administrator">Администратор</option>
            </select>
          </div>
        </div>
      </div>

      <div class={userEditStyles.additionalInfoCont}>
        <div class={userEditStyles.descrCont}>
          <h2>Описание</h2>
          <textarea
            className={userEditStyles.userDescr}
            name="description"
            value={currUserDetails.description}
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
          {!newUserCreation && (
            <button className={userEditStyles.deleteBtn} onClick={handleDelete}>
              Удалить профиль
            </button>
          )}
          <button className={userEditStyles.deleteBtn} onClick={handleCancel}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
