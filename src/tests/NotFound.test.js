import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('tests NotFound component', () => {
  it('tests if message and image appear on screen', () => {
    renderWithRouter(<NotFound />);

    const message = screen.getByText('Page requested not found');
    const image = screen.getByRole('img');

    expect(message).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
