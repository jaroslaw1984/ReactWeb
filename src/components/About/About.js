import React from "react";
import { Col, Image, Card } from "react-bootstrap";
import styled from "styled-components";
import me from "../../images/mini_me.jpg";

const Style = styled.div`
  .imgSize {
    padding-bottom: 10px;
    width: 180px;
    height: 180px;
  }
  .center {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const About = () => (
  <Style>
    <Col id="start" className="center">
      <Image src={me} className="imgSize" fluid roundedCircle />
      <Card className="text-center" border="info">
        <Card.Header>Jarosław Sochacki</Card.Header>
        <Card.Body>
          <Card.Text>
            Hard working person to become Frontend Developer
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Style>
);

export default About;
