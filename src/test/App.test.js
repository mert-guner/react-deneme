import { render, screen } from '@testing-library/react';
import mert from '../components/Mert';



test('renders learn react link', () => {
  render(<Mert />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
