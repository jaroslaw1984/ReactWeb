import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import color from "../../Colors/Colors";
import data from "../../data/data";

const Styles = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    background-color: ${color.navyBlue};
    color: ${color.white};
  }
  .contact_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  .name {
    width: 60%;
    margin: 10px 0;
    text-align: center;
    transition: all 0.5s;
    & > span:last-child {
      margin-left: 10px;
      color: ${color.blueGreenText};
    }
  }
  .name:hover {
    color: ${color.orange};
  }
  .email {
    display: grid;
    grid-template-columns: 50px 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 20px 0;
    background-color: ${color.blue};
    & > span {
      margin: 5px auto;
      font-size: 2rem;
    }
    & span:last-child {
      font-size: 0.9rem;
    }
  }
  .email:hover span:first-child {
    transition: all 0.5s;
    color: ${color.orange};
  }
  .socialMediaIcons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    margin-bottom: 20px;
    height: 20px;
    & > span {
      font-size: 2rem;
    }
    & span:hover > a {
      transition: all 0.5s;
      color: ${color.orange};
    }
    & a:visited,
    a:active,
    a:focus {
      color: ${color.white};
      text-decoration: none;
    }
  }
  .data_section {
    margin: 10px 0;
  }
  .data {
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

const H2 = styled.h2`
  margin: 20px 20px;
  font-size: 1.5rem;
`;

const Footer = ({ checked }) => {
  const date = new Date().getFullYear();
  const { name, email, socialIcons } = data.footerContent;
  const socialIconsItems = socialIcons.map(item => (
    <span key={item.id}>
      <a
        title={item.name}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={item.icon} />
      </a>
    </span>
  ));
  function contactInfo(class_name, icon, info) {
    return (
      <div className={class_name}>
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{info}</span>
      </div>
    );
  }
  return (
    <Styles>
      <Container fluid>
        <Row>
          <div className="footer">
            <H2>{checked ? "Contact" : "Kontakt"}</H2>
            <div className="contact_section">
              {contactInfo("name", name.icon, name.tag)}
              {contactInfo("email", email.icon, email.tag)}
            </div>
            <div className="socialMediaIcons">{socialIconsItems}</div>
            <div className="data_section">
              <p className="data">
                &copy; {date}{" "}
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.omegiumfix.pl"
                >
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
