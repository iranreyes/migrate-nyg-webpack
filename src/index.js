import 'normalize.css';
import './style/global.css';

import framework from './framework';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') require('./util/stats')();

framework();
registerServiceWorker();
