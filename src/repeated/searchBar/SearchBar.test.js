import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('404 renders without crashing', () => {
  render(<SearchBar />);
});

test('matches snapshot', () => {
    const {asFragment} = render(<SearchBar />);
    expect(asFragment()).toMatchSnapshot(); 
  });