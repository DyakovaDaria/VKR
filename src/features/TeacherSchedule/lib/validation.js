export const validation = (startTime, endTime, classroom, student) => {
  const errors = {};
  if (!startTime) {
    errors.startTime = "Выберите время начала занятия";
  }
  if (!endTime) {
    errors.endTime = "Выберите время окончания занятия";
  }
  if (!classroom) {
    errors.classroom = "Выберите класс для занятия";
  }
  if (!student) {
    errors.student = "Укажите ФИО ученика";
  }
  return errors;
};
