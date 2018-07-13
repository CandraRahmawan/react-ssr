import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../clients/pages/Home';
import AboutUs from '../clients/pages/AboutUs';

const routes =
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={Home}/>
    <Route path='/about-us' component={AboutUs}/>
  </Switch>;

export default routes;