import React, {Component, Fragment} from 'react';
import {hydrate} from 'react-dom';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import routes from '../routes/route';

export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}

hydrate(<Index/>, document.getElementById('app'));
