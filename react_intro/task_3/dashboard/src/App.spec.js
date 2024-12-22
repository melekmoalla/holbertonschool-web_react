import { render, screen } from '@testing-library/react'; // Import render and screen utilities
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import App from './App'; // Import the App component to test
import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';


test('renders h1 element with text "School Dashboard"', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', { level: 1, name: /School Dashboard/i });
    expect(h1Element).toBeInTheDocument();
})
/*
test('Write a test to check that the text content within the 2 p elements in the app-body and app-footer divs matches the text shown in the previous task screenshot.', () =>{
    render(<App />);
    
    // Update the expected text to match what is in the component
    const bodyText = screen.getByText("Login to access the full dashboard"); 
    const footerText = screen.getByText("Copyright 2024 - holberton School");
  
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
});
*/
test('test to check if an img element is rendered.', () => {
    render(<App />);
    const image = screen.getByAltText("holberton logo");
    expect(image).toBeInTheDocument();
})

test('renders two input elements', () => {
    render(<App />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();
  
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();

});

test('renders two label elements with Email and Password text', () => {
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


test('getCurrentYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
    });
    
test('getFooterCopy returns the correct string when true', () => {
const result = getFooterCopy(true);
expect(result).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when false', () => {
const result = getFooterCopy(false);
expect(result).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct string', () => {
const result = getLatestNotification();
expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
