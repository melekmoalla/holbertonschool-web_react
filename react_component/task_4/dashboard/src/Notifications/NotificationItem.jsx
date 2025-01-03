// src/Notifications/NotificationItem.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }
  render() {
    const { type, html, value } = this.props;

    return (
    <li
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      dangerouslySetInnerHTML={html ? html : undefined}
      onClick={this.handleClick}
    >
      {html ? null : value}
    </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.object,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
