import '../../styles/button.css';

interface Props {
	title: string;
	icon: JSX.Element;
	action: () => void;
	disabled?: boolean;
}

export default function Button({ action, title, icon, disabled }: Props) {
	return (
		<button
			title={title}
			className={title}
			onClick={action}
			disabled={disabled}>
			{icon}
		</button>
	);
}
