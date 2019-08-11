import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import laptop from "../../images/laptop.jpg";

const Style = styled.div`
  h2 {
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 700;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <Style>
      <h2>Web Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore
        iste ullam iure id asperiores sunt nihil sit cum nulla, vitae ex ratione
        quos nemo obcaecati sed. Repudiandae, corrupti odio.
      </p>
      <Image src={laptop} fluid rounded />
    </Style>
  );
};

export default Home;
