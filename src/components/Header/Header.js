import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import data from "../../data/data";
import styled from "styled-components";
import color from "../../Colors/Colors";
import size from "../../Fonts/Fonts";

const Styles = styled.div`
  .menuText {
    font-size: ${size.menuTextXs};
    color: ${color.blueGreenText} !important;
    width: 90%;
    margin: 10px;
    padding: 0;
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.menuTextSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.menuTextMd};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.menuTextDesk};
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      font-size: ${size.menuTextDeskL};
    }
  }
  .nav-link {
    color: ${color.white};
  }
  .navbar {
    width: 100%;
    background-color: ${color.navyBlue};
  }
  a.navbar-brand {
    font-size: ${size.menuPageNameXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.menuPageNameSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.menuPageNameMd};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.menuPageNameDesk};
    }
    &:hover,
    :active,
    :focus {
      color: ${color.white};
    }
  }
  .navbar-light,
  .navbar-toggler {
    color: ${color.orange};
    border: none;
  }
  .navbar-brand {
    font-weight: 700;
    line-height: 5vh;
    color: ${color.white};
  }
  .active {
    font-weight: 700;
    padding-left: 20px;
    border-left: 1px solid ${color.orange};
    transition: all 0.5s ease;
    /* navbar after 770px*/
    @media screen and (min-width: ${size.resolutionMd}) {
      font-weight: normal;
      padding-left: 0;
      color: ${color.orange} !important;
      border-left: none;
      transition: all 0.5s ease;
    }
  }
  .hamb_wrapper {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
  }
  .hamb_inner {
    width: 100%;
    height: 2px;
    background-color: ${color.orange};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s 0.1s ease-in-out;
    &::after,
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: ${color.orange};
      position: absolute;
      left: 0;
      transition: transform 0.3s 0.2s ease-in-out;
    }
  }
  .hamb_inner::after {
    top: -10px;
  }
  .hamb_inner::before {
    top: 10px;
  }
  button.navbar-toggler.collapsed .hamb_inner {
    background-color: transparent;
  }
  button.navbar-toggler.collapsed .hamb_inner::after {
    transform: translateY(10px) rotate(45deg);
  }
  button.navbar-toggler.collapsed .hamb_inner::before {
    transform: translateY(-10px) rotate(-45deg);
  }
  .languageButtonChange {
    position: relative;
    width: 40px;
    height: 7px;
    background: ${color.white};
    margin: 20px auto;
    border-radius: 100px;
    transition: all 1s ease;
    @media screen and (min-width: ${size.resolutionMd}) {
      left: -35px;
    }
  }
  .languageButtonChange label {
    position: absolute;
    top: -6px;
    left: -1px;
    display: block;
    width: 20px;
    height: 20px;
    background: ${color.pink};
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  .languageButtonChange input[type="checkbox"] {
    position: absolute;
    left: -25px;
    top: -2px;
    width: 100px;
    opacity: 0;
  }
  .languageButtonChange input[type="checkbox"]:checked + label {
    left: 25px;
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
    color: ${color.white};
    font-weight: 700;
    transition: all 0.3s ease-in;
  }
  #scrollHide {
    transition: all 0.3s ease;
  }
`;
const Span = styled.span`
  color: ${color.whiteOpacity};
  font-size: ${size.menuTextXs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.menuTextSm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.menuTextMd};
  }
`;
class Header extends Component {
  render() {
    const { checked, change } = this.props;
    const langPl = "pl";
    const langEn = "en";
    const menu = data.menu.map(item => (
      <ScrollIntoView key={item.id} selector="#scrollTop">
        <Nav.Link
          exact={item.exact ? item.exact : false}
          as={NavLink}
          to={item.path}
          eventKey={item.id}
          className="menuText"
        >
          {checked ? item.name_en : item.name_pl}
        </Nav.Link>
      </ScrollIntoView>
    ));
    return (
      // Navigation bar mobile and desktop view
      <Styles>
        <Navbar collapseOnSelect expand="md" fixed="top" id="scrollHide">
          <Navbar.Brand as={Link} to="/" exact="true">
            {data.nameOfPage}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="">
            <span className="hamb_wrapper">
              <span className="hamb_inner"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="mr-auto">{menu}</Nav>
            <Nav>
              {/* Button that allow to change language page */}
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
