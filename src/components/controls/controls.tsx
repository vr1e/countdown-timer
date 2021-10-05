import { useContext } from 'preact/hooks';
import { CountdownContext } from '../../contexts/CountdownContext';
import '../../styles/controls.css';
import Button from './button';
import pauseIcon from '../icons/pause';
import playIcon from '../icons/play';
import stopIcon from '../icons/stop';

export default function Controls() {
	const appContext = useContext(CountdownContext);
	return (
		<div className='controls'>
			{!appContext.isRunning && <Button type='play' icon={playIcon} />}
			{appContext.isRunning && <Button type='pause' icon={pauseIcon} />}
			<Button type='stop' icon={stopIcon} disabled={!appContext.isRunning} />
		</div>
	);
}
