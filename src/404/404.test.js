import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './404'
import { toMatchSnapshot } from 'jest-snapshot'

expect.extend({ toMatchSnapshot });

test('404 renders without crashing', () => {
  render(<NotFound />);
});

test('Not found message displays', () => {
    render(<NotFound />);

    const text  = screen.getByText("Sorry the page you were looking for doesn't exist.");
    expect(text).toHaveTextContent("Sorry the page you were looking for doesn't exist.");
});

test('Should display "404"', () => {
    render(<NotFound />);
  
    expect(screen.getByText('404')).toBeInTheDocument();
  });

test('matches snapshot', () => {
    const {asFragment} = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot(); 
  })