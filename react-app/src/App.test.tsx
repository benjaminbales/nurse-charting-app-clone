import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nurse Charting App Landing Page/i);
  expect(linkElement).toBeInTheDocument();
});
