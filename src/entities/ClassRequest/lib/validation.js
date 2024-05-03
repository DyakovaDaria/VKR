export const validation = (lesson) => {
  const errors = {};
  if (!lesson.title) {
    errors.startTime = "Выберите время начала занятия";
  }
  if (!lesson.startTime) {
    errors.endTime = "Выберите время окончания занятия";
  }
  if (!lesson.endTime) {
    errors.endTime = "Выберите время окончания занятия";
  }
  if (!lesson.classroom) {
    errors.classroom = "Выберите класс для занятия";
  }
  if (!lesson.date) {
    errors.classroom = "Выберите дату для занятия";
  }
  if (!lesson.teacher) {
    errors.classroom = "Введите ФИО преподавателя";
  }
  return errors;
};
