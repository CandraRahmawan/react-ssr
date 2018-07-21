import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BodyContainer, Separator } from '../../styled/baseStyled.style';
import renderSyntakHighlight from '../../helpers/renderSyntakHighlight';
import example_1 from './example-1.txt';
import example_2 from './example-2.txt';
import example_3 from './example-3.txt';
import example_4 from './example-4.txt';
import example_5 from './example-5.txt';
import example_6 from './example-6.txt';
import example_7 from './example-7.txt';
import example_8 from './example-8.txt';
import example_9 from './example-9.txt';

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BodyContainer>
          <h3>Prepared Install Depedencies</h3>
          {renderSyntakHighlight(example_1)}
          <Separator />
          <h3>Create Index for Entry Client Side Rendering</h3>
          {renderSyntakHighlight(example_2)}
          <Separator />
          <h3>Create Webpack Config</h3>
          {renderSyntakHighlight(example_3)}
          <Separator />
          <h3>Create Server</h3>
          {renderSyntakHighlight(example_4)}
          <Separator />
          <h3>Create Rendering Component for both Client & Server</h3>
          {renderSyntakHighlight(example_5)}
          {renderSyntakHighlight(example_6)}
          <Separator />
          <h3>Create Routes</h3>
          {renderSyntakHighlight(example_7)}
          <h3>Create Page</h3>
          {renderSyntakHighlight(example_8)}
          {renderSyntakHighlight(example_9)}
        </BodyContainer>
        <Footer />
      </Fragment>
    );
  }
}
