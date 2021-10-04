import { render } from '@testing-library/preact';
import Stop from '../stop';

const mockedStop = jest.fn();

describe('stop:', () => {
  test('renders the stop button', () => {
    const { getByTitle } = render(<Stop stop={mockedStop} isRunning />);
    const buttonStop = getByTitle('stop');

    expect(buttonStop).not.toBeNull();
  });
});
