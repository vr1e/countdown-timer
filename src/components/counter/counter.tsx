import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';
import TimeEnter from './time-enter';
import Timeout from './timeout';

export default function Counter() {
	const appContext = useContext(CountdownContext);

	return (
		<div className='counter'>
			{appContext.isRunning === null ? (
				<TimeEnter />
			) : (
				<Timeout displayTime={appContext.time} />
			)}
		</div>
	);
}
