export const validation = (subscription) => {
  const errors = {};
  if (!subscription.name) {
    errors.username = "Введите название абонемента";
  }
  if (!subscription.price) {
    errors.username = "Введите цену абонемента";
  }
  if (!subscription.startDate) {
    errors.username = "Введите продолжительность абонемента";
  }
  if (!subscription.endDate) {
    errors.username = "Введите продолжительность абонемента";
  }
  return errors;
};
