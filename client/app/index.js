import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import {configureStore} from './store';

import App from './components/index.jsx';

const store = configureStore();

const outlet = document.getElementById('app');

const Main = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <Main/>,
    outlet
);