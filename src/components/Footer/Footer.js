import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import color from "../../Colors/Colors";

const Styles = styled.div`
  .footer {
    width: 100%;
    height: 15vh;
    margin-top: 20px;
    background-color: ${color.navyBlue};
  }

  .text {
    line-height: 15vh;
    text-align: center;
    margin-bottom: 0;
    color: ${color.blueGreenText};
    font-weight: 900;
  }
  .link {
    text-decoration: none;
    color: ${color.white};
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
            <div className="data_wrapper">
              <p className="text">
                &copy; {date}{" "}
                <a className="link" href="http://www.omegiumfix.pl">
                  OmegiumFix
                </a>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;
