import React from "react";
import data from "../../data/data";
import ProjectsContent from "./ProjectsContent/ProjectsContent";
import styled from "styled-components";
import size from "../../Fonts/Fonts";

const Div = styled.div`
  @media screen and (min-width: ${size.resolutionDesk}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: flex-start;
  }
`;

const Projects = ({ checked }) => {
  const cards = data.projectsContent.map(card => (
    <ProjectsContent key={card.key} checked={checked} {...card} />
  ));
  return <Div id="start">{cards}</Div>;
};
export default Projects;
