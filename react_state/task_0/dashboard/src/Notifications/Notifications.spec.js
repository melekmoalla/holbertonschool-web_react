import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

const notifications = [
  { id: 1, value: 'New message', type: 'default' },
  { id: 2, value: 'New alert', type: 'urgent' },
  { id: 3, value: 'New task', type: 'default' },
];

describe('Notifications component tests', () => {
  test('renders notifications title', () => {
    render(<Notifications notifications={notifications} displayDrawer={true} handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()} />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications notifications={notifications} displayDrawer={true} handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()} />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders three notification items', () => {
    render(<Notifications notifications={notifications} displayDrawer={true} handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()} />);
    const listItems = screen.getAllByTestId('notification-item');
    expect(listItems).toHaveLength(3);
  });

  test('logs message when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications notifications={notifications} displayDrawer={true} handleDisplayDrawer={jest.fn()} handleHideDrawer={handleHideDrawer} />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    fireEvent.click(buttonElement);
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  test('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications notifications={notifications} displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={jest.fn()} />);
    const menuItem = screen.getByTestId('menu-item');
    fireEvent.click(menuItem);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });
});
