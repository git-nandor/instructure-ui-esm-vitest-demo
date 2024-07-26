import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InstUI button', () => {
  render(<App />);
  const button = screen.getByText('Hello from InstUI!');
  expect(button).toBeInTheDocument();
});
