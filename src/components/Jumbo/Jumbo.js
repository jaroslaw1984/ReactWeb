import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import waves from "../../images/waves.jpg";
import wave from "../../images/wave.jpg";

const Styles = styled.div`
  .jumbo {
    position: relative;
    height: 50vh;
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
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      width: auto;
    }
  }
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1rem;
  }
`;

const Jumbo = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay">
        <div className="center">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <ScrollIntoView selector="#start">
            <p>
              <Button
                className="mdl-button mdl-js-button mdl-button--raised"
                variant="primary"
              >
                Let's start
              </Button>
            </p>
          </ScrollIntoView>
        </div>
      </div>
    </Jumbotron>
  </Styles>
);

export default Jumbo;
