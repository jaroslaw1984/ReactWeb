import React from "react";
import data from "../../data/data";
import ProjectsContent from "./ProjectsContent/ProjectsContent";

const Projects = () => {
  const cards = data.projectsContent.map(card => (
    <ProjectsContent key={card.key} {...card} />
  ));
  return <div id="start">{cards}</div>;
};
export default Projects;
