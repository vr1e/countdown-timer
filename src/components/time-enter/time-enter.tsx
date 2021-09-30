interface Props {
	enteredTime: string;
	enterTimeValue: (e: any) => void;
	play: () => void;
}

export default function TimeEnter({	enteredTime, enterTimeValue, play }: Props) {
	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			play();
		}
	}

	return (
		<input
			type='number'
			required
			value={enteredTime}
			placeholder='Type in time in seconds'
			onChange={enterTimeValue}
			onKeyPress={handleKeyPress}
		/>
	);
}
