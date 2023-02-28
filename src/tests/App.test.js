import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testing App.js component', () => {
  it('test if all 3 links appears on screen', () => {
    renderWithRouter(<App />);

    const home = screen.getByText('Home');
    const about = screen.getByText('About');
    const favorite = screen.getByText('Favorite Pokémon');

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });
});
