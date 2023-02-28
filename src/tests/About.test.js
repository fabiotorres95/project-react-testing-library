import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('About.js component tests', () => {
  it('"About Pokedéx" and the correct image appears on screen', () => {
    renderWithRouter(<About />);

    const title = screen.getByText('About Pokédex');
    const source = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(source).toBeInTheDocument();
    expect(source).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
