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
		<div className='time-input'>
			<input
				type='number'
				required
				value={appContext.enteredTime}
				placeholder='Type in time in seconds'
				onInput={appContext.enterTimeValue}
				onKeyPress={handleKeyPress}
			/>
			<div className='manual-controls'>
				<a
					className='manual-control'
					name='plus'
					onClick={appContext.controlTimeValue}>
					+
				</a>
				<a
					className='manual-control'
					name='minus'
					onClick={appContext.controlTimeValue}>
					-
				</a>
			</div>
		</div>
	);
}
