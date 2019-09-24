import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import data from "../../../data/data";
import styled from "styled-components";

const Style = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 15px;
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
  }
  .buttonLink {
    width: 50%;
    padding: 6px 8px;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
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
  .iconTools {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
  }
`;
const H4 = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
`;

const Article = styled.article`
  margin: 20px 20px 30px;
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
        <H4>{checked ? content.title_en : content.title_pl}</H4>
        <Article>
          {checked ? content.description_en : content.description_pl}
        </Article>
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
          <p>
            {checked
              ? "Tools used to make a project:"
              : "Narzędzia użyte do wykonania projektu:"}
          </p>
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
