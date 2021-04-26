import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi im pat text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi, i am pat!/i);
  expect(linkElement).toBeInTheDocument();
});
