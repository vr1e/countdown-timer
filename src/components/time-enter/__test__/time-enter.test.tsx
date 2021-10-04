import { render } from '@testing-library/preact';
import TimeEnter from '../time-enter';

test('renders the input field', () => {
  const { getByPlaceholderText } = render(
    <TimeEnter enteredTime='' enterTimeValue={() => {}} play={() => {}} />
  );
  const inputField = getByPlaceholderText('Type in time in seconds');

  expect(inputField).not.toBeNull();
});
