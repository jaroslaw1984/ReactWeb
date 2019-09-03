import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Style = styled.div`
  -webkit-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  -moz-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  .wrapper {
    display: grid;
    grid-template-columns: 100px;
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
    font-size: 13px;
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
  .cardMargin {
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
  cardTitle,
  descriptionCard_en,
  descriptionCard_pl,
  programingTools,
  checked
}) => {
  const buttonDetailsName_en = "Details";
  const buttonDetailsName_pl = "Szczegóły";
  const detailsPage = (
    <Link
      className="buttonLink"
      to={`/project/${cardTitle}`.toLocaleLowerCase()}
    >
      {checked ? buttonDetailsName_en : buttonDetailsName_pl}
    </Link>
  );

  const iconTools = [...programingTools].map(icon => (
    <Img key={icon.id} src={icon.img} alt={icon.alt} title={icon.alt} />
  ));
  return (
    <Style>
      <Card id="start" className=" text-center cardMargin ">
        <Card.Img className="cardImg" variant="top" src={img} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{cardTitle}</Card.Title>
          <Card.Text>
            {checked ? descriptionCard_en : descriptionCard_pl}
          </Card.Text>
          <span className="tools">{checked ? "Tools:" : "Narzędzia:"}</span>
          <div className="iconTools">{iconTools}</div>
          <div className="wrapper">{detailsPage}</div>
        </Card.Body>
      </Card>
    </Style>
  );
};

export default ProjectsContent;
