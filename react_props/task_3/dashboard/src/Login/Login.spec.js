// src/Login/Login.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  it('should render the login form with inputs and button', () => {
    const { getByLabelText, getByRole } = render(<Login />);
    
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

    it('should render 2 labels, 2 inputs, and 1 button', () => {
      render(<Login />);
      const emailLabel = screen.getByLabelText(/email/i);
      const passwordLabel = screen.getByLabelText(/password/i);
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole('button', { name: /ok/i });
  
      expect(emailLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
    it('should focus on the email input when the email label is clicked', () => {
      render(<Login />);
  
      const emailLabel = screen.getByLabelText(/email/i);
      const emailInput = screen.getByRole('textbox', { name: /email/i });
  
      emailLabel.click();
      emailInput.focus();

      expect(emailInput).toHaveFocus();
    });
  
  });