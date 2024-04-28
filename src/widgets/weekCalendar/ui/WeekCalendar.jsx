import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./WeekCalendar.module.css";
import { setSelectedDate } from "../model/WeekCalendarSlice";

const WeekCalendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.teacherSchedule.selectedDate
  );

  const [currentWeek, setCurrentWeek] = useState([]);

  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const getWeekStart = (date) => {
    const weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    return weekStart;
  };

  const handleDateSelect = (date) => {
    dispatch(setSelectedDate(date));
  };

  const changeWeek = (direction) => {
    const newSelectedDay = new Date(selectedDate);
    newSelectedDay.setDate(
      newSelectedDay.getDate() + (direction === "next" ? 7 : -7)
    );
    handleDateSelect(newSelectedDay);
  };

  useEffect(() => {
    const weekStart = getWeekStart(selectedDate);
    const newWeek = Array.from({ length: 7 }).map((_, index) => {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + index);
      return day;
    });
    setCurrentWeek(newWeek);
  }, [selectedDate]);

  return (
    <div className={styles.calendarContainer}>
      <p>{months[selectedDate.getMonth()]}</p>
      <div className={styles.week}>
        <button
          onClick={() => changeWeek("prev")}
          className={styles.nextButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 0 320 512"
          >
            <path
              fill="#dc0d7a"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        {currentWeek.map((day, index) => (
          <div className={styles.dayOfWeek}>
            <button
              key={index}
              className={
                day.toDateString() === selectedDate.toDateString()
                  ? styles.selectedButton
                  : styles.dateButton
              }
              onClick={() => {
                handleDateSelect(day);
              }}
            >
              {day.getDate()}
            </button>
            <p
              className={
                day.toDateString() === selectedDate.toDateString()
                  ? styles.selectedWeekDay
                  : ""
              }
            >
              {daysOfWeek[day.getDay()]}
            </p>
          </div>
        ))}
        <button
          onClick={() => changeWeek("next")}
          className={styles.nextButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 0 320 512"
          >
            <path
              fill="#dc0d7a"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WeekCalendar;
