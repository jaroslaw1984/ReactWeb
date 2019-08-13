import React from "react";
import { Button, Image } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const fadeIn = () => keyframes`
  0% {
    opacity: 0;
    top: 35px;
  }
  100% {
    opacity: 1;
    top: 0;
  }

`;

const Li = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  list-style-type: none;
  padding: 0;
  margin: 0;
  animation: ${fadeIn} 0.5s ease;
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

const H6 = styled.h6`
  width: 100%;
  text-align: center;
  color: #0b7bf4;
  font-size: 0.8rem;
`;
const P = styled.p`
  width: 100%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 400;
`;

const Item = ({ name, image, email, description_en, facebookLink }) => (
  <Li>
    <Image
      src={image}
      style={{ width: 150, height: 150, alignSelf: "center" }}
      roundedCircle
    />
    <H2>{name || "Jon Doe"}</H2>
    <H6>{email}</H6>
    <P>
      {description_en ||
        "This description is default because you didn't type any"}
    </P>
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

export default Item;
