import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import { markAsRead } from '../../features/notifications/notificationsSlice';
import './Notifications.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications = [], loading, error } = useSelector(state => state.notifications);
  const notificationsRef = useRef(null);

  const handleToggleDrawer = () => {
    notificationsRef.current?.classList.toggle('visible');
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const renderNotifications = () => {
    if (loading) {
      return <p className={css(styles.loadingText)}>Loading notifications...</p>;
    }

    if (error) {
      return <p className={css(styles.errorText)}>Error loading notifications</p>;
    }

    if (!Array.isArray(notifications) || notifications.length === 0) {
      return (
        <NotificationItem
          type="default"
          value="No notifications available"
        />
      );
    }

    return notifications.map(notification => (
      <NotificationItem
        key={notification.id}
        type={notification.type}
        value={notification.value}
        html={notification.html}
        markAsRead={() => handleMarkAsRead(notification.id)}
      />
    ));
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
        <ul className={css(styles.notificationsList)}>
          {renderNotifications()}
        </ul>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  // ...existing styles...
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontStyle: 'italic'
  }
});

export default React.memo(Notifications);