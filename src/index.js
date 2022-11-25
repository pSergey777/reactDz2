import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app";
import {Provider} from 'react-redux'
import {persistor, store} from './store'
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App/>
        </PersistGate>
    </Provider>,
    document.querySelector("#root")
);
