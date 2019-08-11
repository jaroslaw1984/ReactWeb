import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .menuText {
    font-size: 20px;
  }
  .active {
    padding-left: 10px;
    border-left: 5px solid #c82333;
    @media (min-width: 576px) {
      display: block;
      height: 45px;
      border-bottom: 2px solid #c82333;
      border-left: none;
      color: #c82333;
      transition: 0.5s;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Styles>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Omegiumfix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">
              <Nav.Link
                exact
                as={NavLink}
                to="/"
                eventKey={1}
                className="menuText"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/projects"
                eventKey={2}
                className="menuText"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                eventKey={3}
                className="menuText"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                eventKey={4}
                className="menuText"
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
export default Header;
