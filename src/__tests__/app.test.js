import { render, screen } from '@testing-library/react';
import Hero from '@/app/Hero';


describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Hero />);
    
    // Check if the text "This is Hero Card" is in the document
    const documentElement = screen.getByText('This is Hero Card');  // Using getByText for text content
    
    // Assert that the element is in the document
    expect(documentElement).toBeInTheDocument();
  });

  it('checking my text is present in the',()=>{
    render(<Hero />);
    const element = screen.getByText('This is a Test case we are going to check that test case is running or not');
    expect(element).toBeInTheDocument();
  })
});
