import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  background-color: #8e44ad;
`;

const ListMenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const MenuItem = styled.li`
  float: left;
  &:hover {
    background-color: #9b59b6;
  }
  a {
    padding: 15px;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <ListMenuWrapper>
          <MenuItem>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/about-us'>About Us</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/contact-us'>Contact Us</Link>
          </MenuItem>
        </ListMenuWrapper>
      </Wrapper>
    )
  }
}