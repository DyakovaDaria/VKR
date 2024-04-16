import React, { useState, useEffect } from "react";

const WeekCalendar = () => {
  // Состояние для текущей недели
  const [currentWeek, setCurrentWeek] = useState([]);

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
    <div>
      <div className="week-navigation">
        <button onClick={() => changeWeek("prev")}>&lt;</button>
        {currentWeek.map((day, index) => (
          <div>
            <button
              key={index}
              className={
                day.toDateString() === selectedDay.toDateString()
                  ? "selected"
                  : ""
              }
              onClick={() => setSelectedDay(day)}
            >
              {day.getDate()}
            </button>
            <p></p>
          </div>
        ))}
        <button onClick={() => changeWeek("next")}>&gt;</button>
      </div>
    </div>
  );
};

export default WeekCalendar;
