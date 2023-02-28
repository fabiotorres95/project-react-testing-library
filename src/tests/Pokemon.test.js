import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('tests for the Pokemon component', () => {
  it('check if pokemon uses the correct image', () => {
    renderWithRouter(<Pokemon />);
  });
});
