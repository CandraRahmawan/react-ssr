import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                Hello World
            </Fragment>
        )
    }
}

render(<Index/>, document.getElementById('app'));