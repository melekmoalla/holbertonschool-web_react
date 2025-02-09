import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { markAsRead } from '../../features/notifications/notificationsSlice';
import './Notifications.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector(state => state.notifications);
  const notificationsRef = useRef(null);

  const handleToggleDrawer = () => {
    notificationsRef.current?.classList.toggle('visible');
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleToggleDrawer}>
        Your notifications
      </div>
      <div 
        ref={notificationsRef}
        className={`${css(styles.notifications)} notifications`}
      >
        <button
          className={css(styles.closeButton)}
          aria-label="Close"
          onClick={handleToggleDrawer}
        >
          ×
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
              markAsRead={() => handleMarkAsRead(notification.id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    cursor: 'pointer',
    padding: '8px',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  notifications: {
    position: 'absolute',
    top: '40px',
    right: '8px',
    padding: '16px',
    backgroundColor: 'white',
    border: '1px dashed red',
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  }
});

export default React.memo(Notifications);