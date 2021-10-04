import { /* waitFor, screen, RenderResult */ act, render } from '@testing-library/preact';
import App from '../../app';

describe('app:', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // test('adds 1 + 2 to equal 3', () => {
  //   const expected: number = 3;
  //   expect(1 + 2).toBe(expected);
  // });

  // test('renders the app', () => {
  //   const testMessage = 'Countdown app';
  //   const { getByText } = render(<App />);
  //   expect(getByText(testMessage)).not.toBeNull();
  // });

  test('renders the app', () => {
    const testMessage = 'Countdown app';
    const { getByText } = render(<App />);

    expect(getByText(testMessage)).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // screen.debug()
    // expect(getByText(testMessage2)).not.toBeNull();
  });
});
