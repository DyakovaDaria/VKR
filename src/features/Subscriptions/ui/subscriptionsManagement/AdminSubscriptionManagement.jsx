import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignSubscriptionToStudent } from '../../model/SubscriptionsThunks';

const AdminSubscriptionManagement = () => {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.subscriptions);
  const [studentId, setStudentId] = useState('');
  const [subscriptionId, setSubscriptionId] = useState('');

  const handleAssign = () => {
    dispatch(assignSubscriptionToStudent({ studentId, subscriptionId }));
  };

  return (
    <div>
      <h1>Assign Subscriptions</h1>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Student ID"
      />
      <select value={subscriptionId} onChange={(e) => setSubscriptionId(e.target.value)}>
        {subscriptions.map(sub => (
          <option key={sub.id} value={sub.id}>{sub.name}</option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign Subscription</button>
    </div>
  );
};

export default AdminSubscriptionManagement;
