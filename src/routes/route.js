import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../clients/pages/Home';
import Guide from '../clients/pages/guide';
import ContactUs from '../clients/pages/ContactUs';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/guide" component={Guide} />
    <Route path="/contact-us" component={ContactUs} />
  </Switch>
);
