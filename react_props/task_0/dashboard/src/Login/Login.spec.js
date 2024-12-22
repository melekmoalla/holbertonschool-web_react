// src/Login/Login.spec.js
import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  it('should render the login form with inputs and button', () => {
    const { getByLabelText, getByRole } = render(<Login />);
    
    // Check if the form fields and button are rendered
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});
