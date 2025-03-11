import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../store';

const Notifications = () => {

    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <button 
        className="button"
        onClick={() => dispatch(addNotification())}
      >
        Refresh Notifications
      </button>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index}>{notification}</div>
        ))}
      </div>
    </div>
  )
}

export default Notifications