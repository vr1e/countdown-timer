import { render } from '@testing-library/preact';
import Pause from '../pause';

const mockedPause = jest.fn();

describe('pause:', () => {
  test('renders the pause button', () => {
    const { getByTitle } = render(<Pause pause={mockedPause} />);
    const buttonPlay = getByTitle('pause');

    expect(buttonPlay).not.toBeNull();
  });
});
