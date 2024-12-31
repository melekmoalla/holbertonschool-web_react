// src/Notifications/NotificationItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      dangerouslySetInnerHTML={html ? html : undefined}
    >
      {html ? null : value}
    </li>
  );
}

// Prop validation
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
