import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';

interface Props {
	// enteredTime: string;
	// enterTimeValue: (e: any) => void;
	// play: () => void;
}

export default function TimeEnter() {
	const appContext = useContext(CountdownContext);

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			appContext.play();
		}
	}

	return (
		<input
			type='number'
			required
			value={appContext.enteredTime}
			placeholder='Type in time in seconds'
			onInput={appContext.enterTimeValue}
			onKeyPress={handleKeyPress}
		/>
	);
}
