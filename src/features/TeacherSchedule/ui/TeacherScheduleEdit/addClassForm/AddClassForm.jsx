import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSchedule } from "../../../model/TeacherScheduleSlice";
import {
  selectClassroom,
  loadClassrooms,
} from "../../../../../entities/Classroom";
import addClassFormStyles from "./AddClassForm.module.css";

const AddClassForm = () => {
  const dispatch = useDispatch();
  const [newClass, setNewClass] = useState({
    type: null,
    id: null,
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    classroom: "",
    teacher: "",
    group: null,
    student: null,
  });
  const classrooms = useSelector((state) => state.classroom.list);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // if (name === "type") {
    //   const optionsReset =
    //     question.type !== value &&
    //     (value === "short-text" || value === "extended-answer")
    //       ? []
    //       : question.options.map((opt) => ({ ...opt, correct: false }));
    //   updateSchedule({ ...question, [name]: value, options: optionsReset });
    // } else {
    //   updateSchedule({ ...question, [name]: value });
    // }
  };

  const handleSave = () => {
    // if (
    //   !question.questionText.trim() ||
    //   question.options.some((option) => !option.text.trim())
    // ) {
    //   alert("Question text and all options must be filled.");
    //   return;
    // }
    // if (
    //   (question.type === "single-choice" || question.type === "mult-choice") &&
    //   !question.options.some((option) => option.correct)
    // ) {
    //   alert("At least one correct answer must be selected.");
    //   return;
    // }
    // dispatch(addQuestion(question));
    // dispatch(toggleQuestionCreationModal(false));
  };

  const handleClose = () => {
    // dispatch(toggleQuestionCreationModal(false));
  };
  const [startTime, setStartTime] = useState("10:00");
  const [finishTime, setFinishTime] = useState("11:00");

  React.useEffect(() => {
    dispatch(loadClassrooms());
  }, [dispatch]);

  const handleRadioChange = (e) => {
    setSelectedClassroom(e.target.value);
    dispatch(selectClassroom(e.target.value));
  };

  const chooseClassStyle = (classStatus) => {
    if (classStatus === "free") {
      return addClassFormStyles.freeRadioLabel;
    } else if (classStatus === "partial") {
      return addClassFormStyles.partialRadioLabel;
    }
    return addClassFormStyles.occupiedRadioLabel;
  };

  if (!classrooms) {
    return <div>Loading...</div>;
  }

  return (
    <div className={addClassFormStyles.addClassForm}>
      <form>
        <h3>Время</h3>
        <div className={addClassFormStyles.timeContainer}>
          <div className={addClassFormStyles.startTimeContainer}>
            <label htmlFor="startTime">с</label>
            <input
              onChange={(e) => setStartTime(e.value)}
              value={startTime}
              name="startTime"
              className={addClassFormStyles.timePick}
              type="time"
            />
          </div>
          <div className={addClassFormStyles.endTimeContainer}>
            <label htmlFor="endTime">до</label>
            <input
              onChange={(e) => setFinishTime(e.value)}
              value={finishTime}
              name="endTime"
              className={addClassFormStyles.timePick}
              type="time"
            />
          </div>
        </div>
        <h3>Зал</h3>
        <div className={addClassFormStyles.classroomsContainer}>
          {classrooms.map((classroom) => (
            <div className={addClassFormStyles.classroomContainer}>
              <input
                type="radio"
                id={classroom.id}
                name="classroom"
                value={classroom.id}
                onChange={handleRadioChange}
                class={addClassFormStyles.radioButton}
                disabled={classroom.status === "occupied"}
              />
              <label
                htmlFor={classroom.id}
                class={
                  addClassFormStyles.radioLabel +
                  " " +
                  chooseClassStyle(classroom.status)
                }
              >
                {classroom.name}
              </label>
            </div>
          ))}
        </div>
        <h3>Ученик</h3>
        <input type="text" class={addClassFormStyles.studentNameInp} placeholder="Введите ФИО Ученика"/>
        <button class={addClassFormStyles.acceptBtn}>Сохранить</button>
        <button class={addClassFormStyles.cancelBtn}>Отменить</button>
      </form>
    </div>
  );
};

export default AddClassForm;
