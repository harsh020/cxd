import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import history from './utils/history';
import { store, persistor } from './redux/store';
import AppRouter from './AppRouter';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root');

const render = () => ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <AppRouter />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    MOUNT_NODE
)

render();

serviceWorker.unregister();

reportWebVitals();
