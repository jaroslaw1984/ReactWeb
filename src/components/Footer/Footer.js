import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import color from "../../Colors/Colors";
import data from "../../data/data";
import size from "../../Fonts/Fonts";

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
    width: 100%;
  }
  .name {
    width: 60%;
    margin: 10px 0;
    text-align: center;
    transition: all 0.5s;
    font-size: ${size.PXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.PSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.PMd};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.PDesk};
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      font-size: ${size.PDeskL};
    }
    & > span:last-child {
      margin-left: 10px;
      color: ${color.blueGreenText};
    }
  }
  .name:hover {
    color: ${color.orange};
  }
  .emailWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 20px 0;
    background-color: ${color.blue};
  }
  .email {
    display: grid;
    grid-template-columns: 50px 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 0.3s ease;
    @media screen and (min-width: ${size.resolutionSm}) {
      width: 50%;
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      width: 30%;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      width: 25%;
    }
    & > span {
      /* margin: 5px auto; */
      text-align: center;
      /* size of email icon*/
      font-size: ${size.fMailIconSizeXs};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.fMailIconSizeSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.fMailIconSizeMd};
      }
      @media screen and (min-width: ${size.resolutionDesk}) {
        font-size: ${size.fMailIconSizeDesk};
      }
      @media screen and (min-width: ${size.resolutionDeskL}) {
        font-size: ${size.fMailIconSizeDeskL};
      }
    }
    & span:last-child {
      /* size of email adress */
      font-size: ${size.fMailAdressXs};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.fMailAdressSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.fMailAdressMd};
      }
      @media screen and (min-width: ${size.resolutionDesk}) {
        font-size: ${size.fMailAdressDesk};
      }
      @media screen and (min-width: ${size.resolutionDeskL}) {
        font-size: ${size.fMailAdressDeskL};
      }
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
      /* size of social media icons */
      font-size: ${size.fSocialIconSizeXs};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.fSocialIconSizeSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.fSocialIconSizeMd};
      }
      @media screen and (min-width: ${size.resolutionDesk}) {
        font-size: ${size.fSocialIconSizeDesk};
      }
      @media screen and (min-width: ${size.resolutionDeskL}) {
        font-size: ${size.fSocialIconSizeDeskL};
      }
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
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .data {
    text-align: center;
    color: ${color.blueGreenText};
    font-weight: 900;
    font-size: ${size.PXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.PSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.PMd};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.PDesk};
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      font-size: ${size.PDeskL};
    }
  }
  .link {
    text-decoration: none;
    color: ${color.white};
    cursor: pointer;
  }
`;

const H2 = styled.h2`
  margin: 20px 20px;
  font-size: ${size.H2Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.H2Sm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.H2Md};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.H2Desk};
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    font-size: ${size.H2DeskL};
  }
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
              <div className="emailWrapper">
                {contactInfo("email", email.icon, email.tag)}
              </div>
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
                  {data.nameOfPage}
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
