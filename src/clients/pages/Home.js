import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Server Side Rendering with ReactJS</h1>
        <h3>Technology used : </h3>
        <ul>
          <li>React JS for Core</li>
          <li>Express for Server</li>
          <li>Webpack for Build Assets</li>
          <li>React Router Config for Client Side Rendering</li>
        </ul>
        <h3>We always aware with Unit Testing, we used :</h3>
        <ul>
          <li>Jest</li>
        </ul>
        <Footer />
      </Fragment>
    );
  }
}
