export const validation = (startTime, endTime, title, date) => {
  const errors = {};
  if (!startTime) {
    errors.startTime = "Выберите время начала занятия";
  }
  if (!endTime) {
    errors.endTime = "Выберите время окончания занятия";
  }
  if (!title) {
    errors.classroom = "Выберите класс для занятия";
  }
  if (!date) {
    errors.student = "Укажите ФИО ученика";
  }
  return errors;
};
