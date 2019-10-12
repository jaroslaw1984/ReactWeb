import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Jumbo from "../Jumbo/Jumbo";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import ProjectDetails from "../Projects/ProjectDetails/ProjectDetails";
import ErrorSite from "../ErrorSite/ErrorSite";
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn";

const Style = styled.div`
  .resetMarginPadding {
    padding: 0;
    margin: 0;
  }
`;
class App extends Component {
  state = {
    changeLanguage: false
  };

  handelChangeLanguage = e => {
    this.setState({
      changeLanguage: e.target.checked
    });
  };

  componentDidMount() {
    // script that hide navbar and button to scroll up when scrolling down
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("scrollHide").style.top = "0";
      } else {
        document.getElementById("scrollHide").style.top = "-90px";
      }
      if (prevScrollPos > 100) {
        document.querySelector(".btn_wrapper").style.opacity = "1";
        document.querySelector(".btn_wrapper").style.display = "inline";
      } else {
        document.querySelector(".btn_wrapper").style.opacity = "0";
        document.querySelector(".btn_wrapper").style.display = "none";
      }
      prevScrollPos = currentScrollPos;
    };
  }

  render() {
    const change = this.handelChangeLanguage;
    const checked = this.state.changeLanguage;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Style>
          <Container fluid className="resetMarginPadding">
            <Row className="resetMarginPadding">
              <Col className="resetMarginPadding">
                <Header change={change} checked={checked} />
                <Jumbo checked={checked} />
              </Col>
            </Row>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...props} checked={checked} />}
              />
              <Route
                path="/projects"
                render={props => <Projects {...props} checked={checked} />}
              />
              <Route
                path="/project/:id"
                render={props => (
                  <ProjectDetails {...props} checked={checked} />
                )}
              />
              <Route
                path="/czat"
                render={props => <Contact {...props} checked={checked} />}
              />
              <Route
                path="/about"
                render={props => <About {...props} checked={checked} />}
              />
              <Route component={ErrorSite} />
            </Switch>
          </Container>
          <ScrollTopBtn />
          <Footer checked={checked} />
        </Style>
      </Router>
    );
  }
}
export default App;
