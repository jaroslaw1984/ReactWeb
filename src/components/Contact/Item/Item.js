import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    padding: 40px 30px;
    flex-wrap: nowrap;
  }
`;

const Img = styled.img`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  padding-bottom: 10px;
  margin-top: 15px;
  border-radius: 50%;
  @media (min-width: 768px) {
    padding-bottom: 0;
    margin-right: 30px;
  }
`;

const H2 = styled.h2`
  color: #0b7bf4;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const Item = ({ name, image, description_en, facebookLink }) => (
  <Li>
    <Img src={image} />
    <div>
      <H2>{name || "Jarosław Sochacki"}</H2>
      <P>{description_en}</P>
      <Button href={facebookLink} variant="outline-primary">
        Visit Facebook
      </Button>
    </div>
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
