import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from "./Store/store";
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css'
import App from './App'

const app = (
    <Router>
        <Provider store={store}>
            <div id="app">
                <App/>
            </div>
        </Provider>
    </Router>
    )

ReactDom.render(app, document.querySelector('#root'))