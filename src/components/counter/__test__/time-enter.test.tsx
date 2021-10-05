import { render, screen, fireEvent } from '@testing-library/preact';
import TimeEnter from '../time-enter';

test('renders the input field', () => {
	const { getByPlaceholderText } = render(<TimeEnter />);
	const inputField = getByPlaceholderText('Type in time in seconds');

	expect(inputField).not.toBeNull();
});

test('renders the input field', () => {
	const { getByPlaceholderText } = render(<TimeEnter />);
	const inputField = getByPlaceholderText('Type in time in seconds');

	expect(inputField).not.toBeNull();
});

test('the input field accepts numbers', () => {
	render(<TimeEnter />);
	const inputField = screen.getByPlaceholderText(
		'Type in time in seconds'
	) as HTMLInputElement;
	fireEvent.change(inputField, {
		target: { value: 30 },
	});

	expect(inputField.value).toBe('30');
});

test('the input field does not accept letters', () => {
	render(<TimeEnter />);
	const inputField = screen.getByPlaceholderText(
		'Type in time in seconds'
	) as HTMLInputElement;
	fireEvent.change(inputField, {
		target: { value: 'abc' },
	});

	expect(inputField.value).not.toBe('abc');
});
