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
const lineIn = () => keyframes`
    0% {
      right: 100%;
    }
    100% {
      right: 80%;
    }
`;

const Styles = styled.div`
  .jumbo {
    position: relative;
    min-height: 100vh;
    color: #efefef;
    background: url(${wave});
    z-index: 0;
    @media (min-width: 768px) {
      background: url(${waves});
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
  .center {
    width: 90%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      width: auto;
    }
  }
  .title {
    font-size: 1.2rem;
    animation: ${fadieIn} 2s ease;
  }

  .titleParagraph {
    font-size: 1.5rem;
    font-weight: 700;
    animation: ${fadieIn} 2s 1s both;
  }
  .button {
    position: absolute;
    bottom: -60%;
    left: 0;
    animation: ${fadieIn()} 2s 2s both;
  }
  .redLine {
    position: absolute;
    top: -10%;
    left: 0;
    bottom: 108%;
    background: brown;
    animation: ${lineIn} 2s 3s both;
  }
`;

const Jumbo = ({ checked }) => {
  const {
    title_en,
    title_pl,
    titleParagraph_en,
    titleParagraph_pl,
    button_en,
    button_pl
  } = data.jumboContent;
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay">
          <div className="center">
            <span className="redLine"></span>
            <p className="title">{checked ? title_en : title_pl}</p>
            <h2 className="titleParagraph">
              {checked ? titleParagraph_en : titleParagraph_pl}
            </h2>
            <ScrollIntoView selector="#start">
              <Button className="button" variant="primary">
                {checked ? button_en : button_pl}
              </Button>
            </ScrollIntoView>
          </div>
        </div>
      </Jumbotron>
    </Styles>
  );
};

export default Jumbo;
