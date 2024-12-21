import { render, screen } from '@testing-library/react'; // Import render and screen utilities
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import App from './App'; // Import the App component to test


test('renders h1 element with text "School Dashboard"', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { level: 1, name: /School Dashboard/i });
    expect(h1Element).toBeInTheDocument();
})

test('Write a test to check that the text content within the 2 p elements in the app-body and app-footer divs matches the text shown in the previous task screenshot.', () =>{
    render(<App />);
    
    // Update the expected text to match what is in the component
    const bodyText = screen.getByText("Login to access the full dashboard"); 
    const footerText = screen.getByText("Copyright 2024 - Holberton School");
  
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
});

test('test to check if an img element is rendered.', () => {
    render(<App />);
    const image = screen.getByAltText("holberton logo");
    expect(image).toBeInTheDocument();
})