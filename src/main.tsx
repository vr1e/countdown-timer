import { render } from 'preact';
import App from './app';
import './styles/normalize.css';
import './styles/index.css';

render(<App />, document.getElementById('app')!);
