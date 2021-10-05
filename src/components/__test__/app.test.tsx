import { /* waitFor, , RenderResult */ act, render, screen, fireEvent } from '@testing-library/preact';
import App from '../../app';

describe('app', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

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

describe('components', () => {
  test('stop button is disabled by default', () => {
    render(<App />);
    const stopButton = screen.getByTitle('stop');
    expect(stopButton).toBeDisabled();
  });

  test('enter letters into input', async () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText('Type in time in seconds');
    const playButton = screen.getByTitle('play');

    fireEvent.change(inputField, {
      target: { value: 'abc' },
    });

    fireEvent.click(playButton);
    const messageText = await screen.findByText(/Please enter time using only positive numbers/i)
    expect(messageText).toBeInTheDocument();
  });

  test('enter negative numbers into input', async () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText('Type in time in seconds');
    const playButton = screen.getByTitle('play');

    fireEvent.change(inputField, {
      target: { value: -15 },
    });

    fireEvent.click(playButton);
    const messageText = await screen.findByText(/Please enter time using only positive numbers/i)
    expect(messageText).toBeInTheDocument();
    const timeoutField = screen.queryByTestId('timeout');
    expect(timeoutField).not.toBeInTheDocument();
    const displayTime = screen.queryByTestId('display-time');
    expect(displayTime).not.toBeInTheDocument();
  });
})