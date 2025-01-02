import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {

  constructor(props){
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
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
        <div className="notifications-title">Your Notifications</div>
        {displayDrawer && (
          <div className="notifications">
            {notifications.length === 0 ? (
              <p>No new notifications for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {notifications.map((item) => (
                    <NotificationItem
                    key={item.id}
                    type={item.type}
                    value={item.value}
                    html={item.html}
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

export default Notifications;
