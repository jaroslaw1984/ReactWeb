import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Jumbo from "../Jumbo/Jumbo";
import ErrorSite from "../ErrorSite/ErrorSite";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";

const Style = styled.div`
  .removePadding {
    padding: 0;
  }
`;
class App extends Component {
  state = {
    changeLanguage: true
  };

  handelChangeLanguage = e => {
    this.setState({
      changeLanguage: e.target.checked
    });
  };

  render() {
    const change = this.handelChangeLanguage;
    const checked = this.state.changeLanguage;
    return (
      <Router>
        <Style>
          <Container fluid>
            <Row>
              <Col className="removePadding">
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
                path="/contact"
                render={props => <Contact {...props} checked={checked} />}
              />
              <Route
                path="/about"
                render={props => <About {...props} checked={checked} />}
              />
              <Route component={ErrorSite} />
            </Switch>
          </Container>
          <Container className="removePadding" fluid>
            <Footer />
          </Container>
        </Style>
      </Router>
    );
  }
}
export default App;
