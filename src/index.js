import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {persist, store} from './store'
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
