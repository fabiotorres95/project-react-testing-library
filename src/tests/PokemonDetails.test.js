import { screen } from '@testing-library/react';
import PokemonDetails from '../pages/PokemonDetails';
import { isPokemonFavoriteByIdType } from '../types';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

describe('tests for PokemonDetails component', () => {
  it('check if all the details that appear on screen match with the pokemon selected', () => {
    const onUpdateFavoritePokemon = jest.fn().mockReturnValue('not favorite');

    renderWithRouter(<PokemonDetails
      isPokemonFavoriteById={ isPokemonFavoriteByIdType }
      match={ { params: { id: '25' } } }
      onUpdateFavoritePokemon={ onUpdateFavoritePokemon }
      pokemonList={ pokemonList }
    />);

    const title = screen.getByText('Pikachu Details');
    const summary = screen.getByText('Summary');
    const info = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    const location = screen.getByText('Game Locations of Pikachu');
    const images = screen.getAllByRole('img');
    const label = screen.getByText('Pokémon favoritado?');

    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
    expect(images[1]).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[2]).toBeInTheDocument();
    expect(images[2]).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(label).toBeInTheDocument();
  });
});
