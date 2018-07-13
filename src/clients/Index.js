import React, {Component} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from '../routes/route';

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
