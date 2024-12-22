// src/Footer/Footer.spec.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render the copyright text', () => {
    const { getByText } = render(<Footer />);
    
    // Check if the copyright text is rendered
    expect(getByText(/Copyright/i)).toBeInTheDocument();
  });
  it('should render the copyright message with current year and Holberton School', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`Copyright ${currentYear} Holberton School`));
    expect(footerText).toBeInTheDocument();
  });
});
