import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Jumbo from "../Jumbo/Jumbo";
import ErrorSite from "../ErrorSite/ErrorSite";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";

const removePadding = {
  // this remove padding's from <Container />
  paddingLeft: 0,
  paddingRight: 0
};

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col style={removePadding}>
              <Header />
              <Jumbo />
            </Col>
          </Row>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={ErrorSite} />
          </Switch>
        </Container>
        <Container style={removePadding} fluid>
          <Footer />
        </Container>
      </Router>
    );
  }
}
export default App;
