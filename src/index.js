import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style/global.css';
import App from './sections/App/App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') require('./util/stats')();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
