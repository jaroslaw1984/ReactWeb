import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import page from "../../images/my_page1.jpg";

const buttonMargin = {
  margin: 20
};

const Style = styled.div`
  .cardWidth {
    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

const Projects = () => (
  <Container>
    <Row>
      <Col>
        <Style>
          <Card id="start" className="text-center cardWidth">
            <Card.Img variant="top" src={page} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                style={buttonMargin}
                href="https://github.com/jaroslaw1984/web"
                variant="outline-primary"
              >
                GitHub
              </Button>
              <Button href="http://omegiumfix.pl" variant="outline-primary">
                Live
              </Button>
            </Card.Body>
          </Card>
        </Style>
      </Col>
    </Row>
  </Container>
);
export default Projects;
