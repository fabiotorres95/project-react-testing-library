import { screen } from '@testing-library/react';
import { Pokemon } from '../components';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

const pikachu = pokemonList[0];

describe('tests for the Pokemon component', () => {
  it('check if pokemon uses the correct image', () => {
    renderWithRouter(<Pokemon
      isFavorite={ false }
      pokemon={ pikachu }
    />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(image).toHaveProperty('alt', 'Pikachu sprite');
  });

  it('check if the texts are correct', () => {
    renderWithRouter(<Pokemon
      isFavorite={ false }
      pokemon={ pikachu }
    />);

    const name = screen.getByText('Pikachu');
    const type = screen.getByText('Electric');
    const weight = screen.getByText('Average weight: 6.0 kg');
    const link = screen.getByText('More details');

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty('href', 'http://localhost/pokemon/25');
  });

  it('check if favorite pokémon has a star', () => {
    renderWithRouter(<Pokemon
      isFavorite
      pokemon={ pikachu }
    />);

    const star = screen.getByAltText('Pikachu is marked as favorite');

    expect(star).toBeInTheDocument();
    expect(star).toHaveProperty('src', 'http://localhost/star-icon.svg');
  });
});
