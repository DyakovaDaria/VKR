import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  fetchUserDetails,
  registerAdmin,
  registerStudent,
  registerTeacher,
  updateUserDetails,
} from "../../model/UserThunks";
import { clearUserDetails, setNewUserCreation } from "../../model/UserSlice";
import userEditStyles from "./UserProfileEdit.module.css";
import userProfilePic from "../../../../shared/assets/userPic.png";
import { validateEmail, validation } from "../../lib/validation";

const UserProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currUserDetails, setCurrUserDetails] = useState({});
  const { currentUserForChange, userDetails, loading, error, newUserCreation } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (newUserCreation) {
      setCurrUserDetails({
        userId: "",
        email: "",
        firstName: "",
        lastName: "",
        middleName: "",
        phoneNumber: "",
        photo: "",
        role: "",
        roles: [],
        description: "",
      });
    }
  }, [newUserCreation]);

  useEffect(() => {
    if (currentUserForChange) {
      dispatch(fetchUserDetails(currentUserForChange));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      setCurrUserDetails(userDetails);
    }
  }, [userDetails]);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    if (name === "role") {
      setCurrUserDetails((prev) => ({ ...prev, roles: [value] }));
    }
    setCurrUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const validationErrors = validation(currUserDetails);
    if (Object.keys(validationErrors).length === 0) {
      const emailValid = validateEmail(currUserDetails.email);
      if (emailValid) {
        if (newUserCreation && currUserDetails.role === "Teacher") {
          console.log("user data " + currUserDetails);
          dispatch(
            registerTeacher({
              email: currUserDetails.email,
              firstName: currUserDetails.firstName,
              lastName: currUserDetails.lastName,
              middleName: currUserDetails.middleName,
              phoneNumber: currUserDetails.phoneNumber,
              photo: currUserDetails.photo,
              description: currUserDetails.description,
            })
          );
        } else if (newUserCreation && currUserDetails.role === "Student") {
          dispatch(
            registerStudent({
              email: currUserDetails.email,
              firstName: currUserDetails.firstName,
              lastName: currUserDetails.lastName,
              middleName: currUserDetails.middleName,
              phoneNumber: currUserDetails.phoneNumber,
              photo: currUserDetails.photo,
              description: currUserDetails.description,
            })
          );
        } else if (newUserCreation && currUserDetails.role === "Administrator") {
          dispatch(
            registerAdmin({
              email: currUserDetails.email,
              firstName: currUserDetails.firstName,
              lastName: currUserDetails.lastName,
              middleName: currUserDetails.middleName,
              phoneNumber: currUserDetails.phoneNumber,
              photo: currUserDetails.photo,
              description: currUserDetails.description,
            })
          );
        } else if (!newUserCreation) {
          console.log("мы меняем данные пользователя");
          dispatch(
            updateUserDetails({
              userId: currentUserForChange,
              user: currUserDetails,
            })
          );
        }
        if (!error) {
          dispatch(clearUserDetails());
          navigate("/users-list");
        }
      } else {
        alert("email некорректен!");
      }
    } else {
      alert("Заполните фамилию, имя, телефон, почту и роль пользователя!");
    }
  };

  const handleDelete = () => {
    dispatch(deleteUser(currentUserForChange));
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
              value={currUserDetails.firstName}
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
              value={currUserDetails.middleName}
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
            <label htmlFor="phoneNumber">Телефон</label>
            <input
              type="phone"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Введите номер телефона"
              value={currUserDetails.phoneNumber}
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
