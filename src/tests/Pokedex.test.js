import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import { isPokemonFavoriteByIdType } from '../types';

describe('tests Pokedex component', () => {
  it('check if filter buttons have the correct names and test ids', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ isPokemonFavoriteByIdType }
    />);

    const allButtons = screen.getAllByTestId('pokemon-type-button');

    expect(allButtons[0]).toHaveTextContent('Electric');
    expect(allButtons[1]).toHaveTextContent('Fire');
    expect(allButtons[2]).toHaveTextContent('Bug');
    expect(allButtons[3]).toHaveTextContent('Poison');
    expect(allButtons[4]).toHaveTextContent('Psychic');
    expect(allButtons[5]).toHaveTextContent('Normal');
    expect(allButtons[6]).toHaveTextContent('Dragon');
  });

  it('check if "All" button does not have the same test id as the other type buttons', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ isPokemonFavoriteByIdType }
    />);

    const buttonAll = screen.getByText('All');

    expect(buttonAll).toBeInTheDocument();
    expect(buttonAll).not.toHaveProperty('data-testid', 'pokemon-type-button');
  });

  it('check if "All" button works', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ isPokemonFavoriteByIdType }
    />);

    const buttonAll = screen.getByText('All');
    const buttonFire = screen.getByText('Fire');
    const pokemonName = screen.getByText('Pikachu');

    expect(pokemonName).toBeInTheDocument();

    userEvent.click(buttonFire);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent('Charmander');

    userEvent.click(buttonAll);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent('Pikachu');
  });
});
