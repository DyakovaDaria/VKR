export const validation = (lesson) => {
  const errors = {};
  if (!lesson.title) {
    errors.startTime = "Выберите время начала занятия";
  }
  if (!lesson.startTime) {
    errors.endTime = "Выберите время окончания занятия";
  }
  if (!lesson.name) {
    errors.endTime = "Введите название занятия";
  }
  if (!lesson.classroom) {
    errors.classroom = "Выберите класс для занятия";
  }
  if (!lesson.teacher) {
    errors.classroom = "Выберите преподавателя для занятия";
  }
  return errors;
};
