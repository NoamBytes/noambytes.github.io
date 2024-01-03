import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct header and a random gif', () => {
  render(<App />);
  const headerElement = screen.getByText('This Site is Under Construction');
  const gifElement = screen.getByTitle('Random Cute Animal Gif');
  expect(headerElement).toBeInTheDocument();
  expect(gifElement).toBeInTheDocument();
});
