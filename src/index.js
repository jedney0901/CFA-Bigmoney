import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/layouts/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Match, Miss } from 'react-router';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
