import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';
import '../../styles/validation.css';

export default function ValidationMessage() {
	const appContext = useContext(CountdownContext);
	return (
		<div>
			<div className='validation-message'>{appContext.message}</div>
		</div>
	);
}
