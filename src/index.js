import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, {persistor} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
