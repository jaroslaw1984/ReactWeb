import React from "react";
import data from "../../data/data";
import ProjectsContent from "./ProjectsContent/ProjectsContent";

const Projects = ({ checked }) => {
  const cards = data.projectsContent.map(card => (
    <ProjectsContent key={card.key} checked={checked} {...card} />
  ));
  return <div id="start">{cards}</div>;
};
export default Projects;
