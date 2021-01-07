import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
import App from './App'

const app = (
    <div id="app">
       <App/>
    </div>
    )

ReactDom.render(app, document.querySelector('#root'))