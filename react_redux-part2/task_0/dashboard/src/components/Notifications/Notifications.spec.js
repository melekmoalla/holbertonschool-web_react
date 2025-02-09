import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';

const mockStore = configureStore([]);

describe('Notifications Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: {
        notifications: [
          { id: 1, type: 'default', value: 'Test notification' }
        ]
      }
    });
  });

  it('should toggle visibility when clicking menu item', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    const menuItem = screen.getByText('Your notifications');
    const notifications = screen.getByText('Here is the list of notifications')
      .closest('.notifications');

    fireEvent.click(menuItem);
    expect(notifications).toHaveClass('visible');

    fireEvent.click(menuItem);
    expect(notifications).not.toHaveClass('visible');
  });

  it('should dispatch markAsRead when notification is clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    fireEvent.click(screen.getByText('Test notification'));
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'notifications/markAsRead',
        payload: 1
      })
    );
  });
});