import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AppRoot from '../clients/AppRoot';
import AboutUs from '../clients/AboutUs';

const routes =
  <Switch>
    <Route exact path='/' component={AppRoot}/>
    <Route path='/about-us' component={AboutUs}/>
  </Switch>;

export default routes;