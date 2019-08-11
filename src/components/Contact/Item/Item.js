import React from "react";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    padding: 40px 30px;
    flex-wrap: nowrap;
  }
`;

const H2 = styled.h2`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  color: #0b7bf4;
  font-size: 1.3rem;
  font-weight: 700;
`;
const P = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
`;

const Item = ({ name, image, description_en, facebookLink }) => (
  <Li>
    <Image
      src={image}
      style={{ width: 150, height: 150, alignSelf: "center" }}
      roundedCircle
    />
    <H2>{name || "Jarosław Sochacki"}</H2>
    <P>{description_en}</P>
    <Button
      style={{ width: 180 }}
      href={facebookLink}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline-primary"
    >
      Go to Facebook
    </Button>
  </Li>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description_en: PropTypes.string,
  facebookLink: PropTypes.string.isRequired
};

Item.defaultProps = {
  description_en: "This description is default because you didn't type any"
};

export default Item;
