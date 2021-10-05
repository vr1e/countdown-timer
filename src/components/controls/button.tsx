import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';
import '../../styles/button.css';

interface Props {
	type: string;
	icon: JSX.Element;
	disabled?: boolean;
}

export default function Button({ icon, disabled, type }: Props) {
	const appContext = useContext(CountdownContext);

	return (
		<button
			title={type}
			className={type}
			onClick={appContext[type]}
			disabled={disabled}>
			{icon}
		</button>
	);
}
