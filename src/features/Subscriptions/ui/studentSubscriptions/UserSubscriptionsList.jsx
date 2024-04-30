import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubscriptionsForStudent } from "../../model/SubscriptionsThunks";
import subListStyles from './UserSubscriptionsList.module.css';

const StudentSubscriptions = () => {
  const dispatch = useDispatch();
  const { subscriptions, loading, error } = useSelector(
    (state) => state.subscriptions
  );

  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchSubscriptionsForStudent(user));
  }, [dispatch, user]);

  const chooseStatus = (isActive) => {
    if (isActive) {
      return <p className={subListStyles.activeStatus}>активен</p>
    }
    return <p className={subListStyles.inactiveStatus}>не активен</p>
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={subListStyles.subscriptionsListCont}>
      {subscriptions.map((sub) => (
        <div className={subListStyles.subscriptionCont}>
          <h3>{sub.name}</h3>
          <p className={subListStyles.classesLeftInfo}>занятий осталось: {sub.duration}</p>
          {chooseStatus(sub.isActive)}
        </div>
      ))}
    </div>
  );
};

export default StudentSubscriptions;
