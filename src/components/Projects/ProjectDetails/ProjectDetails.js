import React from "react";
import { Link } from "react-router-dom";
import Details from "../Details/Details";

const ProjectDetails = ({ match }) => {
  return (
    <>
      <div>Strona szczegółowa projektu</div>
      <Details id={match.params.id} />
      <Link to="/projects/">Powrót</Link>
    </>
  );
};

export default ProjectDetails;
