import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import data from "../../data/data";
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
    const menu = data.menu.map(item => (
      <Nav.Link
        key={item.id}
        exact={item.exact ? item.exact : false}
        as={NavLink}
        to={item.path}
        eventKey={item.id}
        className="menuText"
      >
        {item.name_en}
      </Nav.Link>
    ));
    return (
      <Styles>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand as={Link} to="/">
            Omegiumfix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">{menu}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
export default Header;
