import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

const notifications = [
  { id: 1, value: 'New message', type: 'default' },
  { id: 2, value: 'New alert', type: 'urgent' },
  { id: 3, value: 'New task', type: 'default' },
];


describe('Notifications component tests', () => {
  
});
