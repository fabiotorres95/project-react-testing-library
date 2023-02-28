import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Tests for FavoritePokemon component', () => {
  it('shows message when there is no favorite pokémons', () => {
    renderWithRouter(<FavoritePokemon />);

    const message = screen.getByText('No favorite Pokémon found');

    expect(message).toBeInTheDocument();
  });

  it('tests if only the favorite pokémons appear on screen', () => {
    renderWithRouter(<App />);

    const details = screen.getByText('More details');
    userEvent.click(details);

    const favoriteLink = screen.getByText('Favorite Pokémon');
    const favoriteBox = screen.getByText('Pokémon favoritado?');

    userEvent.click(favoriteBox);
    userEvent.click(favoriteLink);

    const pokemon = screen.getByText('Pikachu');
    expect(pokemon).toBeInTheDocument();
  });
});
