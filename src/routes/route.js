import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../clients/pages/Home';
import AboutUs from '../clients/pages/AboutUs';
import ContactUs from '../clients/pages/ContactUs';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/contact-us" component={ContactUs} />
  </Switch>
);
