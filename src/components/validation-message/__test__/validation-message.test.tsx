import { render, screen } from '@testing-library/preact';
import ValidationMessage from '../validation-message';

test('renders the timeout field', () => {
  render(<ValidationMessage message='test' />);
  const timeoutField = screen.findByText('test');
  expect(timeoutField).not.toBeNull();
});
