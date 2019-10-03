import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import data from "../../../data/data";
import styled from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const Style = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
  .imgMargin {
    margin: 10px 0 30px;
  }
  .button {
    width: 90%;
    margin: 10px 10px 30px;
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 1;
  }
  .buttonsWrapper {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .goBackWrapper {
    margin-top: 30px;
    padding: 0 15px;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: 414px) {
      font-size: ${size.BtnLinkSm};
    }
  }
  .buttonLink {
    width: 50%;
    padding: 6px 8px;
    text-decoration: none;
    text-align: center;
    color: ${color.light_blue};
    border: 1px solid ${color.light_blue};
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: 414px) {
      font-size: ${size.BtnLinkSm};
    }
  }
  .buttonLink:hover {
    background-color: ${color.light_blue};
    color: ${color.white};
  }
  .iconTools {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
  }
`;
const H2 = styled.h2`
  font-size: ${size.H2Xs};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 15px;
  @media screen and (min-width: 414px) {
    font-size: ${size.H2Sm};
  }
`;

const P = styled.p`
  margin: 30px 20px;
  padding: 0 15px;
  font-size: ${size.PXs};
  @media screen and (min-width: 414px) {
    font-size: ${size.PSm};
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

class ProjectDetails extends Component {
  render() {
    const { match, checked } = this.props;
    const detail = data.projectsContent.find(
      ({ id }) => id === match.params.id
    );
    const iconTools = detail.programingTools.map(icon => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={icon.id}
        href={icon.url}
      >
        <Img src={icon.img} alt={icon.name} title={icon.name} />
      </a>
    ));
    const contents = detail.detailsContenet.map(content => (
      <div key={content.id} className="wrapperContent">
        <H2>{checked ? content.title_en : content.title_pl}</H2>
        <P>{checked ? content.description_en : content.description_pl}</P>
        <Image
          src={content.m_img}
          title={match.params.id}
          alt={match.params.id}
          className="imgMargin"
          fluid
          rounded
        />
      </div>
    ));
    const buttons = detail.buttonDetails.map(button => (
      <Button
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        key={button.id}
        href={button.url}
      >
        {checked ? button.name_en : button.name_pl}
      </Button>
    ));

    return (
      <Style>
        <div id="start" className="wrapper">
          {contents}
          <P>
            {checked
              ? "Tools used to make a project:"
              : "Narzędzia użyte do wykonania projektu:"}
          </P>
          <div className="iconTools">{iconTools}</div>
          <div className="goBackWrapper">
            <ScrollIntoView selector="#scrollTop">
              <Link className="buttonLink" to="/projects">
                {checked ? "Go back" : "Powrót"}
              </Link>
            </ScrollIntoView>
          </div>
          <div className="button buttonsWrapper">{buttons}</div>
        </div>
      </Style>
    );
  }
}
export default ProjectDetails;
