import React from 'react';
import { render } from '@testing-library/react';
import JobList from './JobList';

test('App renders without crashing', () => {
  render(<JobList />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<JobList />);
  expect(asFragment()).toMatchSnapshot(); 
});

