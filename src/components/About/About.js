import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import me from "../../images/mini_me.jpg";
import data from "../../data/data";
import Tags from "./Tags/Tags";
import color from "../../Colors/Colors";
import size from "../../Fonts/Fonts";

const shadow = () => keyframes`
    5% {
      box-shadow: 0 0px 5px 12px rgba(0, 252, 254, 0.5), 0 0px 5px 8px rgba(114, 224, 209, 0.5);
    }
    15% {
      box-shadow: 0 0px 15px 12px rgba(0, 252, 254, 0.5), 0 0px 5px 8px rgba(114, 224, 209, 0.5);
    }
    30% {
      box-shadow: 0 0px 10px 6px rgba(0, 252, 254, 0.2), 0 0px 5px 8px rgba(114, 224, 209, 0.5);
    }
    60% {
      box-shadow: 0 0px 15px 12px rgba(0, 252, 254,  0.5), 0 0px 5px 8px rgba(114, 224, 209, 0.3);
    }
    80% {
      box-shadow: 0 0px 5px 3px rgba(114, 224, 209, 0.2), 0 0px 5px 5px rgba(255,255,255, 0.1);
    }
    100% {
      box-shadow: 0 0px 2px 2px rgba(114, 224, 209, 0.2), 0 0px 5px 5px rgba(255,255,255, 0.1);
    }
`;

const Style = styled.div`
  .about_header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
    background-color: ${color.navyBlue};
  }
  .img_wrapper {
    display: flex;
    height: 80%;
    justify-content: center;
    border-bottom: 2px solid ${color.orange};
  }
  .img_size {
    width: 120px;
    height: 120px;
    animation: ${shadow} 4s infinite ease;
    @media screen and (min-width: 414px) {
      width: 125px;
      height: 125px;
    }
  }
  .tags_header_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    color: ${color.blueGreenText};
    border-bottom-left-radius: 20px;
    border-left: 2px solid ${color.orange};
  }

  .line {
    width: 50%;
    height: 2px;
    margin: 40px auto;
    text-align: center;
    background: ${color.white};
    background: ${color.lineColor};
  }
  .title_experience,
  .title_skills {
    text-transform: uppercase;
    font-size: ${size.H2Xs};
    @media screen and (min-width: 414px) {
      font-size: ${size.H2Sm};
    }
  }
  .docWrapper {
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    height: 10vh;
    margin: 30px 20px;
    padding: 0 15px;
    & span {
      display: flex;
      align-items: center;
      font-size: ${size.IconSizeXs};
      color: ${color.blue};
      @media screen and (min-width: 414px) {
        font-size: ${size.IconSizeSm};
      }
    }
    & p {
      display: flex;
      margin: 0;
      justify-content: flex-start;
      align-items: center;
      font-size: ${size.PXs};
      @media screen and (min-width: 414px) {
        font-size: ${size.PSm};
      }
    }
    & a:visited,
    a:active,
    a:focus {
      color: ${color.blue};
      text-decoration: none;
    }
    & span ~ span:hover a {
      color: ${color.orange};
      transition: all 0.5s;
    }
  }
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
`;
const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 15px 15px;
  margin: 20px 0;
`;
const H2 = styled.h2`
  padding: 0 15px;
  margin-bottom: 8px;
  font-weight: 700;
  text-align: left;
  font-size: ${size.H2Xs};
  @media screen and (min-width: 414px) {
    font-size: ${size.H2Sm};
  }
`;
const P = styled.p`
  padding: 0 15px;
  margin: 30px 20px;
  font-size: ${size.APXs};
  @media screen and (min-width: 414px) {
    font-size: ${size.PSm};
  }
`;

class About extends Component {
  state = {
    activeIndex: false
  };

  handleClick = index => {
    this.setState({
      activeIndex: index
    });
    if (this.state.activeIndex === index) {
      this.setState({
        activeIndex: false
      });
    }
  };

  render() {
    const programingIcons = data.icons.map(icon => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={icon.id}
        href={icon.url}
      >
        <Img key={icon.id} src={icon.img} alt={icon.name} title={icon.name} />
      </a>
    ));
    const { checked } = this.props;
    const { description_en, description_pl } = data.footerContent.experience;
    const questionsTags = data.aboutContent.map((tag, index) => (
      <Tags
        key={tag.id}
        title_en={tag.title_en}
        title_pl={tag.title_pl}
        description_en={tag.description_en}
        description_pl={tag.description_pl}
        index={index}
        isActive={this.state.activeIndex === index}
        checked={checked}
        onClick={this.handleClick}
      />
    ));

    return (
      <Style>
        <div id="start">
          <div className="about_header">
            <div className="tags_header_wrapper">
              <p>{checked ? "Sophisticated." : "Wyrafionowany."}</p>
              <p>{checked ? "Competent." : "Kompetentny."}</p>
              <p>{checked ? "Adaptive." : "Adaptacyjny."}</p>
            </div>
            <div className="img_wrapper">
              <Image roundedCircle className="img_size" src={me} />
            </div>
          </div>
          {questionsTags}
          <section>
            <div className="line"></div>
            <H2 className="title_skills">
              {checked ? "Skills" : "Umiejętności"}
            </H2>
            <Span>{programingIcons}</Span>
            <H2 className="title_experience">
              {checked ? "Experience" : "Doświadczenie"}
            </H2>
            <P>{checked ? description_en : description_pl}</P>
            <div className="docWrapper">
              <span>
                <FontAwesomeIcon icon={faFilePdf} />
              </span>
              <p>-{checked ? "in polish" : "po polsku"}</p>

              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1lv-1t1tbGtBCUY6YteQmqtPUDzMuZ-Zw/view?usp=sharing"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </span>
            </div>
            <div className="docWrapper">
              <span>
                <FontAwesomeIcon icon={faFilePdf} />
              </span>
              <p>-{checked ? "in english" : "po angielsku"}</p>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1SKUdUbWC17nBfCevW10pZzKGLzecVl9T/view?usp=sharing"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </span>
            </div>
          </section>
        </div>
      </Style>
    );
  }
}

export default About;
