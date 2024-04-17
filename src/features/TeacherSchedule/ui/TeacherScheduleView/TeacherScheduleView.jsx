import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchScheduleForDate } from "../../model/TeacherScheduleThunks";
import { ClassPreview } from "../../../../entities/Class";
import WeekCalendar from "./weekCalendar/WeekCalendar";
import styles from "./TeacherScheduleView.module.css";

const TeacherScheduleView = ({ teacherId }) => {
  const dispatch = useDispatch();
  const { schedule, loading, error, selectedDate } = useSelector(
    (state) => state.teacherSchedule
  );

  useEffect(() => {
    dispatch(
      fetchScheduleForDate({
        teacherId: "123",
        date: selectedDate.toISOString().split("T")[0],
      })
    );
  }, [selectedDate, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedule: {error}</p>;

  return (
    <div className={styles.teacherScheduleCont}>
      <WeekCalendar></WeekCalendar>
      {schedule.map((classInfo) => (
        <ClassPreview key={classInfo.id} classInfo={classInfo}></ClassPreview>
      ))}
    </div>
  );
};

export default TeacherScheduleView;
