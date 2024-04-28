import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubscriptionsForStudent } from "../../model/SubscriptionsThunks";

const StudentSubscriptions = () => {
  const dispatch = useDispatch();
  const { subscriptions, loading, error } = useSelector(
    (state) => state.subscriptions
  );

  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchSubscriptionsForStudent(user));
  }, [dispatch, user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Your Subscriptions</h1>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.name} - {sub.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSubscriptions;
