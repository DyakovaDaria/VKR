import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import usersListStyles from "./UsersListView.module.css";
import { fetchUsers } from "../../model/UsersSettingsThunks";
import { setNewUserCreation } from "../../../../entities/User";
import { UserPreview } from "../../../../entities/User";

const UsersListView = () => {
  const { users, loading, error } = useSelector((state) => state.usersSettings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  // useEffect(() => {
  //   setFilteredUsers(
  //     searchTerm
  //       ? users.filter(
  //           (user) =>
  //             user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             user.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             user.midname.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //         )
  //       : users
  //   );
  // }, [searchTerm, users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedule: {error}</p>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addNewUser = () => {
    // dispatch(setCurrentUser("new"));
    dispatch(setNewUserCreation(true));
    navigate("/create-user");
  };

  return (
    <div className={usersListStyles.usersListPageCont}>
      <div className={usersListStyles.usersListContainer}>
        <div className={usersListStyles.searchBox}>
          <input
            type="text"
            placeholder="Для поиска введите ФИО сотрудника"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={usersListStyles.userList}>
          {users?.map((user) => (
            <UserPreview user={user}></UserPreview>
          ))}
        </div>
        <div>
          <button className={usersListStyles.addUserBtn} onClick={addNewUser}>
            Добавить пользователя
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersListView;
