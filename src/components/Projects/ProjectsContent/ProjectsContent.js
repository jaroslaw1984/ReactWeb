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
  descriptionCard_en,
  descriptionCard_pl,
  urlGitCard,
  urlLiveCard,
  checked
}) => {
  const buttonGitName = "GitHub";
  const buttonLiveName_en = "Live";
  const buttonLiveName_pl = "Na żywo";
  return (
    <Style>
      <Div>
        <Card id="start" className="text-center cardMargin">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
              {checked ? descriptionCard_en : descriptionCard_pl}
            </Card.Text>
            <Button
              className="buttonMargin"
              href={urlGitCard}
              variant="outline-primary"
            >
              {buttonGitName}
            </Button>
            <Button href={urlLiveCard} variant="outline-primary">
              {checked ? buttonLiveName_en : buttonLiveName_pl}
            </Button>
          </Card.Body>
        </Card>
      </Div>
    </Style>
  );
};

export default ProjectsContent;
