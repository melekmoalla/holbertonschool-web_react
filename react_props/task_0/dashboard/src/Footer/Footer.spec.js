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
});
