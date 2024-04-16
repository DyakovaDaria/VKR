import React, { useState, useEffect } from "react";
import styles from "./WeekCalendar.module.css";

const WeekCalendar = () => {
  // Состояние для текущей недели
  const [currentWeek, setCurrentWeek] = useState([]);

  // Массив с названиями дней недели
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

  // Состояние для выбранного дня
  const [selectedDay, setSelectedDay] = useState(new Date());

  // Функция для получения начала недели
  const getWeekStart = (date) => {
    const weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
    return weekStart;
  };

  // Функция для изменения недели
  const changeWeek = (direction) => {
    const newSelectedDay = new Date(selectedDay);
    newSelectedDay.setDate(
      newSelectedDay.getDate() + (direction === "next" ? 7 : -7)
    );
    setSelectedDay(newSelectedDay);
  };

  // Инициализация недели при монтировании компонента и при изменении selectedDay
  useEffect(() => {
    const weekStart = getWeekStart(selectedDay);
    const newWeek = Array.from({ length: 7 }).map((_, index) => {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + index);
      return day;
    });
    setCurrentWeek(newWeek);
  }, [selectedDay]);

  return (
    <div className={styles.calendarContainer}>
      <p>{months[selectedDay.getMonth()]}</p>
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
                day.toDateString() === selectedDay.toDateString()
                  ? styles.selectedButton
                  : styles.dateButton
              }
              onClick={() => setSelectedDay(day)}
            >
              {day.getDate()}
            </button>
            <p
              className={
                day.toDateString() === selectedDay.toDateString()
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
