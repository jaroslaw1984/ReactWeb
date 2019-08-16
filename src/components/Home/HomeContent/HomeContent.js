import React from "react";
import { Image, Container } from "react-bootstrap";
import styled from "styled-components";

const Style = styled.div`
  div.container {
    padding: 0;
  }
  div {
    padding-top: 45px;
  }
  h2 {
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 700;
    text-align: center;
  }
`;
const HomeContent = props => {
  return (
    <Style>
      <Container>
        <div id={props.id}>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
          <Image src={props.img} fluid rounded />
        </div>
      </Container>
    </Style>
  );
};

export default HomeContent;
