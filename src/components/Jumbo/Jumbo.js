import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import styled, { keyframes } from "styled-components";
import waves from "../../images/waves.jpg";
import wave from "../../images/wave.jpg";
import data from "../../data/data";

const fadieIn = key => keyframes`
    0% {
      opacity: 0;
      ${key ? { transform: "translateX(-50px)" } : null} ;
    }
    100% {
      opacity: 1;
    }
`;

const Styles = styled.div`
  .jumbo {
    position: relative;
    min-height: 100vh;
    color: #efefef;
    background-size: cover;
    background: url(${wave}) no-repeat;
    z-index: 0;
    @media (min-width: 768px) {
      background: url(${waves}) no-repeat;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .center {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      width: auto;
    }
  }
  .title {
    font-size: 2rem;
    animation: ${fadieIn} 2s ease;
  }

  .titleParagraph {
    font-size: 1.2rem;
    animation: ${fadieIn} 2s 1s both;
  }
  .button {
    animation: ${fadieIn()} 2s 2s both;
  }
`;

const Jumbo = () => {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay">
          <div className="center">
            <h1 className="title">{data.jumboContent.title}</h1>
            <p className="titleParagraph">{data.jumboContent.titleParagraph}</p>
            <ScrollIntoView selector="#start" alignToTop="true">
              <Button className="button" variant="primary">
                {data.jumboContent.button}
              </Button>
            </ScrollIntoView>
          </div>
        </div>
      </Jumbotron>
    </Styles>
  );
};

export default Jumbo;
