import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from '../routes/route';
import {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    )
  }
}

hydrate(<Index/>, document.getElementById('app'));
