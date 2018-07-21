import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BodyContainer, Separator } from '../../styled/baseStyled.style';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import Prism from 'prismjs';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BodyContainer>
          <b>Prepared Install Depedencies</b>
          {renderSyntakHighlight(example_1)}
          <Separator />
          <b>Create Server</b>
          {renderSyntakHighlight(example_2)}
        </BodyContainer>
        <Footer />
      </Fragment>
    );
  }
}
