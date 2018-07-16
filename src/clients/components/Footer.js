import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: #8e44ad;
  width: 100%;
  color: #fff;
  padding: 15px;
  text-align: center;
  letter-spacing: 1px;
  font-size: 18px;
`;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        Supported By ReactJS
      </Wrapper>
    )
  }
}