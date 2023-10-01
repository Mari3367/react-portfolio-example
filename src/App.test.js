import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Home section', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);
  const element = screen.getByText('HOME');
  expect(element).toBeInTheDocument();
});
