import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  handleClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div
            className={css(styles.menuItem)}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add(css(styles.menuItemHover));
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove(css(styles.menuItemHover));
            }}
          >
            Your Notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            {notifications.length === 0 ? (
              <p>No new notifications for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsUl)}>
                  {notifications.map((item) => (
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                      id={item.id}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <img src={closeIcon} alt="Close icon" style={{ width: '10px', height: '10px' }} />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const fade = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    right: '10px',
    top: '10px',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1000,
    ':hover': {
      animationName: [fade, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
  },
  menuItemHover: {
    animationName: [fade, bounce],
    animationDuration: '1s, 0.5s',
    animationIterationCount: '3, 3',
  },
  notifications: {
    width: '300px',
    backgroundColor: 'white',
    border: '1px solid #e1003c',
    padding: '20px',
    fontSize: '14px',
    position: 'relative',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      padding: '10px',
      fontSize: '20px',
    },
  },
  notificationsUl: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  notificationsLi: {
    padding: '10px 8px',
    fontSize: '20px',
    borderBottom: '1px solid black',
  },
});

export default Notifications;
