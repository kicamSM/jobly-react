import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { toMatchSnapshot } from 'jest-snapshot'

expect.extend({ toMatchSnapshot });

test('App renders without crashing', () => {
  render(<App />);
});

// test('matches snapshot', () => {
//   const {asFragment} = render(<App />);
//   expect(asFragment()).toMatchSnapShot(); 
// })

it('matches snapshot', () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapShot(); 
});

