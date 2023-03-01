import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import PokemonDetails from '../pages/PokemonDetails';
import { isPokemonFavoriteByIdType } from '../types';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

// const app = require('../App');

describe('tests for PokemonDetails component', () => {
  it('check if all the details that appear on screen match with the pokemon selected', () => {
    const onUpdateFavoritePokemon = jest.fn();

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
    const forest = screen.getByText('Kanto Viridian Forest');
    const plant = screen.getByText('Kanto Power Plant');
    const label = screen.getByText('Pokémon favoritado?');

    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
    expect(images[1]).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1]).toHaveProperty('alt', 'Pikachu location');
    expect(forest).toBeInTheDocument();
    expect(images[2]).toBeInTheDocument();
    expect(images[2]).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(images[2]).toHaveProperty('alt', 'Pikachu location');
    expect(plant).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  // it('check if favorite box shows a star on screen', () => {
  //   const app = require('../App');

  //   const mockFunction = jest.fn();
  //   const onUpdateFavoritePokemon = jest.fn()
  //     .mockReturnValue(render(<img
  //       className="favorite-icon"
  //       src="/star-icon.svg"
  //       alt="Pikachu is marked as favorite"
  //     />));

  //   renderWithRouter(<PokemonDetails
  //     isPokemonFavoriteById={ isPokemonFavoriteByIdType }
  //     match={ { params: { id: '25' } } }
  //     onUpdateFavoritePokemon={ mockFunction }
  //     pokemonList={ pokemonList }
  //   />);

  //   const label = screen.getByText('Pokémon favoritado?');

  //   userEvent.click(label);

  //   const star = screen.getByAltText('Pikachu is marked as favorite');
  //   expect(star).toBeInTheDocument();
  // });
});
