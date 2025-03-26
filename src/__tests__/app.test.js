import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />);
    const documentElement = screen.querySelector('.document-content'); // Custom selector
    expect(documentElement).toBeInTheDocument();
  });
});
