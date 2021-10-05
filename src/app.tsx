import { FunctionComponent } from 'preact';
import Controls from './components/controls/controls';
import Counter from './components/counter/counter';
import DisplayTime from './components/display-time/display-time';
import ValidationMessage from './components/validation-message/validation-message';
import CountdownContextProvider from './contexts/CountdownContext';

const App: FunctionComponent = () => {
	return (
		<main>
			<div className='content-wrapper'>
				<CountdownContextProvider>
					<header>
						<h1>Countdown app</h1>
					</header>
					<div className='countdown-timer'>
						<DisplayTime />
						<Counter />
						<Controls />
						<ValidationMessage />
					</div>
				</CountdownContextProvider>
			</div>
		</main>
	);
};

export default App;
