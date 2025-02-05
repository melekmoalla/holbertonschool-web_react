import React, { memo } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

const Notifications = ({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
}) => {
  return (
    <>
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            <img src="close-icon.png" alt="close icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                id={0}
                type="default"
                value="No new notification for now"
                markAsRead={markNotificationAsRead}
              />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  Notifications: {
    border: '1px dashed #e1354b',
    padding: '1rem',
    position: 'absolute',
    right: '1rem',
    top: '1.5rem',
    width: '300px',
    backgroundColor: 'white',
  },
});

export default memo(Notifications);