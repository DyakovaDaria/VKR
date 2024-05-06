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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
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
          {users &&
            users?.map((user) => <UserPreview user={user}></UserPreview>)}
        </div>
        <div className={usersListStyles.spanPagesCont}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={usersListStyles.spanPageBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="#dc0d7a"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <span className={usersListStyles.spanPages}>
            {" "}
            Страница {currentPage} из {totalPages}{" "}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={usersListStyles.spanPageBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="#dc0d7a"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
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
