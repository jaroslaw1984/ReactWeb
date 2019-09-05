import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data/data";

const ProjectDetails = ({ match }) => {
  const detail = data.projectsContent.find(({ id }) => id === match.params.id);
  const contents = detail.detailsContenet.map(content => (
    <div key={content.id} className="wrapper_content">
      <h3>{content.title_en}</h3>
      <article>{content.description_en}</article>
      <img src="#" alt="nic" />
    </div>
  ));
  return (
    <div className="wrapper">
      {contents}
      <Link to="/projects">Powrót</Link>
      <footer>Następny projekt</footer>
    </div>
  );
};

export default ProjectDetails;
