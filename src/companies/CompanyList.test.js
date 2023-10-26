import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from './CompanyList';

test('App renders without crashing', () => {
  render(<CompanyList />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<CompanyList />);
  expect(asFragment()).toMatchSnapshot(); 
})



