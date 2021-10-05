import { render } from 'preact';
import App from './app';
import './styles/normalize.css';
import './styles/global.css';

render(<App />, document.getElementById('app')!);
