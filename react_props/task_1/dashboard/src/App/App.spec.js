// src/App.spec.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders h1 element with text "School Dashboard"', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { level: 1, name: /School Dashboard/i });
    expect(h1Element).toBeInTheDocument();
});

test('checks text content in app-body and app-footer', () => {
    render(<App />);
    const bodyText = screen.getByText("Login to access the full dashboard");
    const footerText = screen.getByText("Copyright 2024 Holberton School");
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
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
