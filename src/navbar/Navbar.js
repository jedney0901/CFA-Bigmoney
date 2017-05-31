import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';


class MainNav extends Component {

  render() {

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">BigMoney Big Dreams</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">MyMoney</NavItem>
            <NavItem eventKey={2} href="#">MyBudget</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
