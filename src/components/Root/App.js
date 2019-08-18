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
    languageEn: true
  };

  handelChangeLanguage = e => {
    this.setState({
      languageEn: e.target.checked
    });
  };

  render() {
    return (
      <Router>
        <Style>
          <Container>
            <Row>
              <Col className="removePadding">
                <Header
                  change={this.handelChangeLanguage}
                  checked={this.state.languageEn}
                />
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
          <Container className="removePadding" fluid>
            <Footer />
          </Container>
        </Style>
      </Router>
    );
  }
}
export default App;
