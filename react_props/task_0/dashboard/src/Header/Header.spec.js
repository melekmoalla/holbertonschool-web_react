// src/Header/Header.spec.js
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render the logo and title', () => {
    const { getByAltText, getByText } = render(<Header />);
    
    // Check if the logo and title are rendered
    expect(getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(getByText(/School dashboard/i)).toBeInTheDocument();
  });
});
