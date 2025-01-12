import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends Component {

  constructor(props){
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
  };

  render() {

    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className={css(styles.notificationsTitle)}>Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            {notifications.length === 0 ? (
              <p>No new notifications for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsUl)}>
                  {notifications.map((item) => {
                    return (
                      <NotificationItem
                        key={item.id}
                        type={item.type}
                        value={item.value}
                        html={item.html}
                        id={item.id} 
                        markAsRead={this.markAsRead}
                      />
                    );
                  })}
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


const styles = StyleSheet.create({
  notifications: {
    width: '300px',
    backgroundColor: 'white',
    border: '1px solid #e1003c',
    padding: '20px',
    fontSize: '14px',
    position: 'relative',
  },

  notificationsTitle: {
    fontWeight: 'bold',
  },

  notificationsUl: {
    listStyleType: 'none',
    padding: 0,
  },

  notificationsLi: {
    marginBottom: '10px',
  },

  notificationsDefault: {
    color: 'black',
  },

  notificationsUrgent: {
    color: '#e1003c',
    fontWeight: 'bold',
  },
});

export default Notifications;
