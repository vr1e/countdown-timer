import { FunctionComponent } from 'preact';
import { createContext } from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';

// interface AppContextInterface {
// 	time: number;
// 	message: string;
// 	enteredTime: string;
// 	isRunning: null | boolean;
// 	play: () => void;
// 	pause: () => void;
// 	stop: () => void;
// 	enterTimeValue: (e: any) => void;
// }

export const CountdownContext = createContext<any>({});

const CountdownContextProvider: FunctionComponent = props => {
	const [time, setTime] = useState<number>(0);
	const [message, setMessage] = useState('');
	const [enteredTime, setEnteredTime] = useState('');
	const [isRunning, setIsRunning] = useState<null | boolean>(null);
	const timeElapsed = useRef<HTMLDivElement>(null);

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
		timeElapsed.current?.style.setProperty(
			'transform',
			`scaleY(0.${percentage})`
		);

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
		<CountdownContext.Provider
			value={{
				time,
				message,
				isRunning,
				play,
				pause,
				stop,
				enterTimeValue,
				enteredTime,
				timeElapsed,
			}}>
			{props.children}
		</CountdownContext.Provider>
	);
};

export default CountdownContextProvider;
