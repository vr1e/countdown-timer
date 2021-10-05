import { render, screen } from '@testing-library/preact';
import Timeout from '../timeout';

test('renders the timeout field', async () => {
  render(<Timeout displayTime={1} />);
  const timeoutField = await screen.findByTestId('timeout');
  expect(timeoutField).not.toBeNull();
});
