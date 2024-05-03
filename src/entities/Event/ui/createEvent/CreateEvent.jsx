import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createEventStyles from "./CreateEvent.module.css";
import moment from "moment";
import { validation } from "../../lib/validation";
import { toggleNewEventCreationMode } from "../../../../widgets/eventsList";
import { addNewEvent } from "../../model/EventsThunks";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({
    id: Date.now(),
    title: "",
    description: "",
    date: Date.now(),
    startTime: moment().format("HH:mm"),
    endTime: moment().add(1, "hours").format("HH:mm"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    console.log(newEvent);
    event.preventDefault();
    const validationErrors = validation(
      newEvent.startTime,
      newEvent.endTime,
      newEvent.title,
      newEvent.date
    );
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addNewEvent({ newEvent }));
      dispatch(toggleNewEventCreationMode(false));
    } else {
      alert("All fields must be filled out.");
    }
  };

  const handleClose = () => {
    dispatch(toggleNewEventCreationMode(false));
  };

  //   useEffect(() => {
  //     dispatch(loadClassrooms());
  //   }, [dispatch]);

  return (
    <div className={createEventStyles.addClassForm}>
      <form onSubmit={handleSave}>
        <div className={createEventStyles.titleContainer}>
          <label htmlFor="title">Название</label>
          <input
            onChange={handleInputChange}
            name="title"
            type="text"
            value={newEvent.title}
          />
        </div>
        <div className={createEventStyles.descriptionContainer}>
          <label htmlFor="description">Описание</label>
          <textarea name="description" onChange={handleInputChange}></textarea>
        </div>
        <h3>Дата</h3>
        <div className={createEventStyles.dateContainer}>
          <input
            onChange={handleInputChange}
            name="date"
            className={createEventStyles.datePick}
            type="date"
            value={newEvent.date}
          />
        </div>
        <h3>Время</h3>
        <div className={createEventStyles.timeContainer}>
          <div className={createEventStyles.startTimeContainer}>
            <label htmlFor="startTime">с</label>
            <input
              onChange={handleInputChange}
              name="startTime"
              className={createEventStyles.timePick}
              type="time"
              value={newEvent.startTime}
            />
          </div>
          <div className={createEventStyles.endTimeContainer}>
            <label htmlFor="endTime">до</label>
            <input
              onChange={handleInputChange}
              name="endTime"
              className={createEventStyles.timePick}
              type="time"
              value={newEvent.endTime}
            />
          </div>
        </div>
        <button type="submit" class={createEventStyles.acceptBtn}>
          Сохранить
        </button>
        <button class={createEventStyles.cancelBtn} onClick={handleClose}>
          Отменить
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
