import React from "react";
import { Card, Button } from "react-bootstrap";

import styled from "styled-components";

const Style = styled.div`
  .buttonMargin {
    margin: 20px;
  }
  .cardMargin {
    margin-bottom: 30px;
  }
`;
const Div = styled.div`
  -webkit-box-shadow: 3px 4px 7px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 4px 7px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 4px 7px 2px rgba(0, 0, 0, 0.4);
`;
const ProjectsContent = ({
  img,
  cardTitle,
  descriptionCard,
  urlGitCard,
  urlLiveCard
}) => {
  const buttonGitName = "GitHub";
  const buttonLiveName = "Live";
  return (
    <Style>
      <Div>
        <Card id="start" className="text-center cardMargin">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{descriptionCard}</Card.Text>
            <Button
              className="buttonMargin"
              href={urlGitCard}
              variant="outline-primary"
            >
              {buttonGitName}
            </Button>
            <Button href={urlLiveCard} variant="outline-primary">
              {buttonLiveName}
            </Button>
          </Card.Body>
        </Card>
      </Div>
    </Style>
  );
};

export default ProjectsContent;
