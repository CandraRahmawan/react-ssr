import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BodyContainer } from '../styled/baseStyled.style';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BodyContainer>
          <h1>Server Side Rendering with ReactJS</h1>
          <h3>Technology used : </h3>
          <ol>
            <li>React JS</li>
            <li>Express</li>
            <li>Webpack 4</li>
            <li>React Router 4</li>
            <li>Jest / Enzyme</li>
            <li>Styled Component</li>
            <li>Prettier</li>
            <li>Nodemon</li>
          </ol>
        </BodyContainer>
        <Footer />
      </Fragment>
    );
  }
}
