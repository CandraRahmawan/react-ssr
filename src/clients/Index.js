import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes/route';
import {injectGlobal} from 'styled-components';
import {hot} from 'react-hot-loader';

injectGlobal`
  body {
    margin: 0;
  }
`;

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    )
  }
}

hot(module)(<Index/>);

hydrate(<Index/>, document.getElementById('app'));
