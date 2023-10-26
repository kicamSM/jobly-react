import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './404'
import { toMatchSnapshot } from 'jest-snapshot'

expect.extend({ toMatchSnapshot });

test('404 renders without crashing', () => {
  render(<NotFound />);
});

// test('404 displays', () => {
//     render(<NotFound />);

//     const text  = screen.getByText("404");
//     expect(text).toHaveTextContent("404")



// });

// test('should render a 404 page', () => {
//     render(<NotFound />);
  
//     expect(screen.getByText('404')).toBeInTheDocument();
//   });

test('should render a 404 page', () => {
    render(<NotFound />);
  
    expect(screen.getByText('404')).toContainHTML();
  });