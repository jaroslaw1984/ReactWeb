import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import avatar from "../../../images/avatar.jpg";

const Li = styled.li`
  display: flex;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  border-radius: 50%;
  @media (min-width: 768px) {
    padding-bottom: 0;
    margin-right: 30px;
  }
`;

const H2 = styled.h2`
  color: #1e58ff;
  font-size: 1.3rem;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const Item = () => (
  <Li>
    <Img src={avatar} />
    <div>
      <H2>Jarosław Sochacki</H2>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
        hic? Cum enim natus, autem porro obcaecati possimus odit quam at tenetur
        quis placeat nemo quia. Beatae harum soluta corrupti in?
      </P>
      <Button variant="outline-primary">Visit Facebook</Button>
    </div>
  </Li>
);

export default Item;
