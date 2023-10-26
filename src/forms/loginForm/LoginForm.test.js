import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";


test('Renders without crashing', () => {
  render(<LoginForm />);
});

test('Should display "Log In"', () => {
    render(<LoginForm />);
  
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
