import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    width: 100%;
    height: 10vh;
    margin-top: 20px;
    color: white;
    background-color: #343a40;
  }
  .text {
    line-height: 10vh;
    text-align: center;
    margin-bottom: 0;
  }
  .link {
    text-decoration: none;
    cursor: pointer;
  }
`;

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Styles>
      <Container fluid>
        <Row>
          <div className="footer">
            <p className="text">
              &copy; {date}{" "}
              <a className="link" href="http://www.omegiumfix.pl">
                OmegiumFix
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;
