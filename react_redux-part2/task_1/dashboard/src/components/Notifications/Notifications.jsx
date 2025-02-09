import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import { markAsRead } from '../../features/notifications/notificationsSlice';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, loading } = useSelector(state => state.notifications);
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
        {loading ? (
          <p className={css(styles.loadingText)}>Loading notifications...</p>
        ) : (
          <>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationsList)}>
              {notifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No notifications available"
                />
              ) : (
                notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => handleMarkAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
          </>
        )}
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
  },
  loadingText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic'
  },
  notificationsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
});

export default React.memo(Notifications);