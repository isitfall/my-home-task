import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from "./Store/store";

import './index.css'
import App from './App'

const app = (
    <Provider store={store}>
        <div id="app">
            <App/>
        </div>
    </Provider>

    )

ReactDom.render(app, document.querySelector('#root'))