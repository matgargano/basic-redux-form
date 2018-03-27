import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer/index';
import promise from 'redux-promise';
import {Provider} from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
