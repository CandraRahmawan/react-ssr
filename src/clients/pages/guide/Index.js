import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BodyContainer } from '../../styled/baseStyled.style';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import example_1 from './example-1.txt';

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BodyContainer>
          <b>Prepared Install Depedenciess</b>
          {renderSyntakHighlight(example_1)}
        </BodyContainer>
        <Footer />
      </Fragment>
    );
  }
}
