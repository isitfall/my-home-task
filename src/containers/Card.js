import React, {Component} from 'react';

import DummyComponent from '../components/DummyComponent/DummyComponent';

export default class Card extends Component {
    render() {
        return (
            <div>
                <h1>Test component</h1>
                <DummyComponent />
            </div>
        )
    }
}