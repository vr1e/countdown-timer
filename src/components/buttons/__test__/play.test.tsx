import { render } from '@testing-library/preact';
import Play from '../play';

const mockedPlay = jest.fn();

describe('play:', () => {
  test('renders the play button', () => {
    const { getByTitle } = render(<Play play={mockedPlay} />);
    const buttonPlay = getByTitle('play');

    expect(buttonPlay).not.toBeNull();
  });
});
