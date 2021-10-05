import { FunctionComponent } from 'preact';
import { useEffect, useState, useRef } from 'preact/hooks';
import TimeEnter from './components/time-enter/time-enter';
import Timeout from './components/timout/timeout';
import ValidationMessage from './components/validation-message/validation-message';
import Button from './components/buttons/button';
import playIcon from './components/icons/play';
import pauseIcon from './components/icons/pause';
import stopIcon from './components/icons/stop';

const App: FunctionComponent = () => {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<null | boolean>(null);
	const timeElapsed = useRef<HTMLDivElement>(null);
	const [message, setMessage] = useState('');
	const [enteredTime, setEnteredTime] = useState('');

	/* updates entered time value to 1/10 of a second on play */
	useEffect(() => {
		let interval: NodeJS.Timer;

		if (isRunning) {
			if (time === 0) {
				setTime(parseInt(enteredTime) * 10);
			}

			interval = setInterval(() => {
				setTime(prevTime => prevTime - 1);
			}, 100);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	/* updates visual elapsed time on time change and stops at time expired */
	useEffect(() => {
		const percentage = `00${Math.round(
			(time / parseInt(enteredTime)) * 100
		)}`.slice(-3);
		timeElapsed.current?.style.setProperty('transform', `scaleY(0.${percentage})`);

		if (time === 0 && isRunning) {
			stop();
			setMessage('Your time expired!');
		}
	}, [time]);

	function play() {
		if (enteredTime && parseInt(enteredTime) > 0) {
			setIsRunning(true);
			setMessage('');
		} else {
			setTime(0);
			setMessage('Please enter time using only positive numbers');
		}
	}

	function pause() {
		setIsRunning(false);
	}

	function stop() {
		setIsRunning(null);
		setEnteredTime('');
		setTime(0);
		timeElapsed.current?.style.setProperty('transform', 'scaleY(0)');
	}

	function enterTimeValue(e: any) {
		setEnteredTime(e.currentTarget.value);
	}

	return (
		<div>
			<main>
				<div className='content-wrapper'>
					<header>
						<h1>Countdown app</h1>
					</header>
					<div className='countdown-timer'>
						<div className='display-time'>
							<div
								className='time-elapsed'
								ref={timeElapsed}
								data-testid='display-time'></div>
						</div>

						<div className='counter'>
							{isRunning === null && (
								<TimeEnter
									enterTimeValue={enterTimeValue}
									enteredTime={enteredTime}
									play={play}
								/>
							)}
							{isRunning !== null && <Timeout displayTime={time} />}
						</div>
						<div className='controls'>
							{!isRunning && (
								<Button action={play} title='play' icon={playIcon} />
							)}
							{isRunning && (
								<Button action={pause} title='pause' icon={pauseIcon} />
							)}
							<Button
								action={stop}
								title='stop'
								icon={stopIcon}
								disabled={!isRunning}
							/>
						</div>
						<ValidationMessage message={message} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
