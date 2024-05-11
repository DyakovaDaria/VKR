export const validation = (userData) => {
  const errors = {};
  if (!userData.email) {
    errors.username = "Введите email";
  }
  if (!userData.firstName) {
    errors.username = "Введите имя";
  }
  if (!userData.lastName) {
    errors.username = "Введите фамилию";
  }
  if (!userData.phoneNumber) {
    errors.password = "Введите телефон";
  }
  if (!userData.role) {
    errors.password = "Введите роль";
  }
  return errors;
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

