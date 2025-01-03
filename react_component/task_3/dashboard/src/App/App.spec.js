// src/App.spec.js
import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders h1 element with text "School Dashboard"', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { level: 1, name: /School Dashboard/i });
    expect(h1Element).toBeInTheDocument();
});



test('checks if an img element with alt text "holberton logo" is rendered', () => {
    render(<App />);
    const image = screen.getByAltText("holberton logo");
    expect(image).toBeInTheDocument();
});

test('renders two input elements (email and password)', () => {
    render(<App />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
});

test('renders two label elements (Email and Password)', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
});

test('renders a button with text "OK"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
});


beforeEach(() => {
  window.alert = jest.fn();
});

test('calls logOut when ctrl + h is pressed', () => {
    const logOutMock = jest.fn();
    const { container } = render(<App logOut={logOutMock} />);

    fireEvent.keyDown(container, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('displays alert when ctrl + h is pressed', () => {
    const logOutMock = jest.fn();
    const { container } = render(<App logOut={logOutMock} />);

    fireEvent.keyDown(container, { ctrlKey: true, key: 'h' });

    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });