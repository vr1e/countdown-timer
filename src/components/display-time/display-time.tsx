import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';

export default function DisplayTime() {
	const { timeElapsed } = useContext(CountdownContext);

	return (
		<div className='display-time'>
			<div
				className='time-elapsed'
				ref={timeElapsed}
				data-testid='display-time'></div>
		</div>
	);
}
