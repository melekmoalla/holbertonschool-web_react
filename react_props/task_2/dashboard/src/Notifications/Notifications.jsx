import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({ notifications }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      <button
        style={{
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close icon" style={{ width: '10px', height: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            type={item.type}
            value={item.value}
            html={item.html}
          />
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
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
  notifications: [],
};

export default Notifications;
