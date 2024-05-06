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
  const [totalPages, setTotalPages] = useState(0);

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
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
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
