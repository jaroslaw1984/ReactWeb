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
  .languageButtonChange {
    position: relative;
    width: 40px;
    height: 7px;
    background: rgb(192, 188, 188);
    margin: 20px auto;
    border-radius: 100px;
  }
  .languageButtonChange label {
    position: absolute;
    top: -6px;
    left: -1px;
    display: block;
    width: 20px;
    height: 20px;
    background: brown;
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  .languageButtonChange input[type="checkbox"] {
    position: absolute;
    left: 0;
    top: -2px;
    width: 50px;
    opacity: 0;
  }
  .languageButtonChange input[type="checkbox"]:checked + label {
    left: 25px;
    background: #0b7bf4;
  }
  .languageButtonName {
    position: absolute;
    left: -30px;
    top: calc(80% - 32px);
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    margin: 20px auto;
    width: 110px;
  }
  .spanActive {
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease-in;
  }
`;
const Span = styled.span`
  color: gray;
  font-size: 1.3rem;
`;
class Header extends Component {
  render() {
    const { checked, change } = this.props;
    const pageTitle = "Omegiumfix";
    const langPl = "pl";
    const langEn = "en";
    const menu = data.menu.map(item => (
      <Nav.Link
        key={item.id}
        exact={item.exact ? item.exact : false}
        as={NavLink}
        to={item.path}
        eventKey={item.id}
        className="menuText"
      >
        {checked ? item.name_en : item.name_pl}
      </Nav.Link>
    ));
    return (
      <Styles>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
          // fixed="top"
        >
          <Navbar.Brand as={Link} to="/">
            {pageTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">
              {menu}
              <div className="languageButtonChange">
                <div className="languageButtonName">
                  <Span className={checked ? null : "spanActive"}>
                    {langPl}
                  </Span>
                  <Span className={checked ? "spanActive" : null}>
                    {langEn}
                  </Span>
                </div>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={checked}
                  onChange={change}
                />
                <label htmlFor="checkbox" id="checkbox" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
export default Header;
