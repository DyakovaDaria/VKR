export const validation = (username, password) => {
  const errors = {};
  if (!username.trim()) {
    errors.username = "Введите логин";
  }
  if (!password) {
    errors.password = "Введите пароль";
  }
  return errors;
};
