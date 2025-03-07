import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/About/i)[0]).toBeInTheDocument();
});
