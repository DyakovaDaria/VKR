export const validation = (name) => {
    const errors = {};
    if (!name) {
      errors.startTime = "Выберите название для нового зала";
    }
    return errors;
  };
  