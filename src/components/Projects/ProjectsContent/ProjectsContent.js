import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";

const Style = styled.div`
  -webkit-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  -moz-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  margin: 0 15px;
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .iconTools {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .buttonLink {
    margin-top: 10px;
    padding: 6px 8px;
    font-size: 15px;
    text-decoration: none;
    color: #007bff;
    border: 1px solid #007bff;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .buttonLink:hover {
    background-color: #007bff;
    color: #ffff;
  }
  .cardSpace {
    margin-bottom: 30px;
  }
  .cardBody {
    margin-top: 20px;
    padding: 15px;
  }
  .cardTitle {
    font-weight: 700;
  }
  span.tools {
    font-style: italic;
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ProjectsContent = ({
  img,
  id,
  cardTitle,
  descriptionCard_en,
  descriptionCard_pl,
  programingTools,
  checked
}) => {
  const buttonDetailsName_en = "Details";
  const buttonDetailsName_pl = "Szczegóły";
  const detailsPage = (
    <ScrollIntoView selector="#scrollTop">
      <Link className="buttonLink" to={`/project/${id}`.toLowerCase()}>
        {checked ? buttonDetailsName_en : buttonDetailsName_pl}
      </Link>
    </ScrollIntoView>
  );

  const iconTools = [...programingTools].map(icon => (
    <a target="_blank" rel="noopener noreferrer" key={icon.id} href={icon.url}>
      <Img src={icon.img} alt={icon.name} title={icon.name} />
    </a>
  ));
  return (
    <Style>
      <Card id="start" className=" text-center cardSpace ">
        <Card.Img className="cardImg" variant="top" src={img} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{cardTitle}</Card.Title>
          <Card.Text>
            {checked ? descriptionCard_en : descriptionCard_pl}
          </Card.Text>
          <span className="tools">
            {checked ? "Technologies used:" : "Użyte technologie:"}
          </span>
          <div className="iconTools">{iconTools}</div>
          <div className="wrapper">{detailsPage}</div>
        </Card.Body>
      </Card>
    </Style>
  );
};

export default ProjectsContent;
