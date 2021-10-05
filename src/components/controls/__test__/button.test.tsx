import { render } from '@testing-library/preact';
import Button from '../../controls/button';
import playIcon from '../../icons/play';
import stopIcon from '../../icons/stop';
import pauseIcon from '../../icons/pause';

describe('button', () => {
	test('renders the play button', () => {
		const { getByTitle } = render(<Button type='play' icon={playIcon} />);
		const buttonPlay = getByTitle('play');

		expect(buttonPlay).not.toBeNull();
	});

	test('renders the pause button', () => {
		const { getByTitle } = render(<Button type='pause' icon={pauseIcon} />);
		const buttonPause = getByTitle('pause');

		expect(buttonPause).not.toBeNull();
	});

	test('renders the stop button', () => {
		const { getByTitle } = render(<Button type='stop' icon={stopIcon} />);
		const buttonStop = getByTitle('stop');

		expect(buttonStop).not.toBeNull();
	});
});
