import { render } from '@testing-library/preact';
import Button from '../button';
import playIcon from '../../icons/play';
import stopIcon from '../../icons/stop';
import pauseIcon from '../../icons/pause';

const mockedFn = jest.fn();

describe('button', () => {
	test('renders the play button', () => {
		const { getByTitle } = render(
			<Button action={mockedFn} title='play' icon={playIcon} />
		);
		const buttonPlay = getByTitle('play');

		expect(buttonPlay).not.toBeNull();
	});

	test('renders the pause button', () => {
		const { getByTitle } = render(
			<Button action={mockedFn} title='pause' icon={pauseIcon} />
		);
		const buttonPause = getByTitle('pause');

		expect(buttonPause).not.toBeNull();
	});

	test('renders the stop button', () => {
		const { getByTitle } = render(
			<Button action={mockedFn} title='stop' icon={stopIcon} />
		);
		const buttonStop = getByTitle('stop');

		expect(buttonStop).not.toBeNull();
	});
});
