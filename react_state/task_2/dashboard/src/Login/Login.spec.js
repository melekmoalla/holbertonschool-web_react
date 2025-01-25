import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  test("Submit button is disabled by default", () => {
    render(<Login />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button becomes enabled when email and password meet criteria", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Initially disabled
    expect(submitButton).toBeDisabled();

    // Enter valid email and short password
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(submitButton).toBeDisabled();

    // Enter valid email and valid password
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(submitButton).toBeEnabled();
  });
});
