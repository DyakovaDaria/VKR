import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import subscriptionsManagementStyles from "./AdminSubscriptionManagement.module.css";
import { validation } from "../../lib/validation";

const AdminSubscriptionManagement = () => {
  const dispatch = useDispatch();
  const [newSubscription, setNewSubscription] = useState({
    id: Date.now(),
    name: "",
    price: 0.0,
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    student: "",
    isActive: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubscription((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const validationErrors = validation(newSubscription);
    if (Object.keys(validationErrors).length === 0) {
      //   dispatch(updateSchedule(newClass));
      //   dispatch(toggleClassCreationModal(false));
    } else {
      // setErrors(validationErrors);
      alert("All fields must be filled out.");
    }
  };

  return (
    <div className={subscriptionsManagementStyles.newSubscriptionForm}>
      <h3>Название</h3>
      <input
        type="text"
        name="name"
        onChange={handleInputChange}
        value={newSubscription.name}
      />
      <h3>Цена</h3>
      <input
        type="number"
        name="price"
        onChange={handleInputChange}
        value={newSubscription.price}
      />
      <h3>Продолжительность</h3>
      <div className={subscriptionsManagementStyles.durationCont}>
        <div className={subscriptionsManagementStyles.dateContainer}>
          <label htmlFor="startDate">с</label>
          <input
            onChange={handleInputChange}
            name="startDate"
            type="date"
            value={newSubscription.startDate}
          />
        </div>
        <div className={subscriptionsManagementStyles.dateContainer}>
          <label htmlFor="endDate">до</label>
          <input
            onChange={handleInputChange}
            name="endDate"
            type="date"
            value={newSubscription.endDate}
          />
        </div>
      </div>
      <h3>Пользователь</h3>
      <input
        type="text"
        name="student"
        onChange={handleInputChange}
        value={newSubscription.student}
      />
      <button className={subscriptionsManagementStyles.addSubscriptionBtn}>Добавить</button>
    </div>
  );
};

export default AdminSubscriptionManagement;
