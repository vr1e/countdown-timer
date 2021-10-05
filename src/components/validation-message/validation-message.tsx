import '../../styles/validation.css';

interface Props {
	message: string;
}

export default function ValidationMessage({ message }: Props) {
	return <div className='validation-message'>{message}</div>;
}
