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
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${color.navyBlue};
    @media screen and (min-width: 480px) and (orientation: landscape) {
      justify-content: center;
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      justify-content: center;
      align-items: center;
    }
  }
  .header_wrapper {
    display: grid;
    width: 100%;
    height: 170px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    @media screen and (min-width: 480px) and (max-width: 639px) and (orientation: landscape) {
      width: 70%;
    }
    @media screen and (min-width: 640px) and (orientation: landscape) {
      width: 55%;
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      width: 70%;
      height: 220px;
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      width: 50%;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      width: 40%;
    }
  }
  .header_img_wrapper {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .header_img_size {
    width: 130px;
    height: 130px;
    animation: ${shadow} 4s infinite ease;
    @media screen and (min-width: ${size.resolutionSm}) {
      width: 135px;
      height: 135px;
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      width: 180px;
      height: 180px;
    }
  }
  .tags_header_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 15px;
    color: ${color.blueGreenText};
    border-bottom-left-radius: 20px;
    border-left: 2px solid ${color.orange};
    & > p {
      font-size: ${size.APXs};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.APSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.APMd};
        margin-left: 20px;
      }
    }
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
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.H2Sm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.H2Md};
    }
  }
  .docWrapper {
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    height: 10vh;
    margin: 30px 20px;
    padding: 0 15px;
    /* space between file and download icon */
    @media screen and (min-width: 600px) {
      grid-template-columns: 30px 200px 50px;
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      justify-content: center;
      grid-template-columns: 30px 50% 50px;
    }
    @media screen and (min-width: ${size.resolutionMdLands}) and (orientation: landscape) {
      grid-template-columns: 30px 60% 150px;
    }
    & span {
      display: flex;
      align-items: center;
      font-size: ${size.IconSizeFileXs};
      color: ${color.blue};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.IconSizeFileSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.IconSizeFileMd};
      }
    }
    & p {
      display: flex;
      margin: 0;
      justify-content: flex-start;
      align-items: center;
      font-size: ${size.PXs};
      @media screen and (min-width: ${size.resolutionSm}) {
        font-size: ${size.PSm};
      }
      @media screen and (min-width: ${size.resolutionMd}) {
        font-size: ${size.PMd};
        margin-left: 20px;
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
    .downloadLink {
      color: ${color.blue};
    }
  }
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
  @media screen and (min-width: ${size.resolutionSm}) {
    width: 110px;
    height: 110px;
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    width: 130px;
    height: 130px;
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    width: 90px;
    height: 90px;
  }
`;
// configuration icons skills
const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 15px 15px;
  margin: 20px 0;
  @media screen and (min-width: 480px) and (orientation: landscape) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
const H2 = styled.h2`
  padding: 0 15px;
  margin-bottom: 8px;
  font-weight: 700;
  text-align: left;
  font-size: ${size.H2Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.H2Sm};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.H2Desk};
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    font-size: ${size.H2DeskL};
  }
`;
const P = styled.p`
  padding: 0 15px;
  margin: 30px 20px;
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
            <div className="header_wrapper">
              <div className="tags_header_wrapper">
                <p>{checked ? "Competent." : "Kompetentny."}</p>
                <p>{checked ? "Adaptive." : "Adaptacyjny."}</p>
                <p>{checked ? "Adequate." : "Adekwatny."}</p>
              </div>
              <div className="header_img_wrapper">
                <Image roundedCircle className="header_img_size" src={me} />
              </div>
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
                  className="downloadLink"
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
                  className="downloadLink"
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
