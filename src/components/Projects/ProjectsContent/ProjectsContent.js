import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const Style = styled.div`
  -webkit-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  -moz-box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  margin: 0 15px;
  @media screen and (min-width: ${size.resolutionMd}) {
    margin: 0 auto;
    width: 70%;
  }
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .iconTools {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    @media screen and (min-width: ${size.resolutionMd}) {
      justify-content: space-around;
    }
    @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
      justify-content: space-evenly;
    }
  }
  .buttonLink {
    margin: 10px;
    padding: 6px 8px;
    text-decoration: none;
    color: ${color.light_blue};
    border: 1px solid ${color.light_blue};
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.BtnLinkSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.BtnLinkMd};
    }
  }
  .buttonLink:hover {
    background-color: ${color.light_blue};
    color: ${color.white};
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
    font-size: ${size.PCCardTitleXs};
    text-transform: uppercase;
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.PCCardTitleSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.PCCardTitleMd};
    }
  }
  .cardText {
    margin: 20px 0;
    line-height: ${size.lineHeight};
    font-size: ${size.PCCardTextXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.PCCardTextSm};
      & + span.tools {
        font-size: ${size.PCCardTextSm};
      }
    }
    @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
      line-height: ${size.lineHeightLandscape};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.PCCardTextMd};
      & + span.tools {
        font-size: ${size.PCCardTextMd};
      }
    }
    & + span.tools {
      margin: 10px;
      font-style: italic;
    }
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media screen and (min-width: ${size.resolutionSm}) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    width: 60px;
    height: 60px;
  }
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
          <Card.Text className="cardText">
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
