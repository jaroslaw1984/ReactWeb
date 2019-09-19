import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import me from "../../images/mini_me.jpg";
import data from "../../data/data";
import Tags from "./Tags/Tags";
import color from "../../Colors/Colors";

const fadieIn = () => keyframes`
    from {
      transform: translateY(-30px)
    }
    to {
      transform: translateY(0)
    }
`;
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
    margin-right: 15px;
    justify-content: center;
    border-bottom-right-radius: 20px;
    border-bottom: 2px solid ${color.orange};
  }
  .img_size {
    width: 120px;
    height: 120px;
    animation: ${shadow} 4s infinite ease;
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
  .wrapper_tag {
    display: grid;
    grid-template-columns: 1fr;
    transition: all 0.2s;
    margin-top: 20px;
    cursor: pointer;
  }
  .title_wrapper {
    display: grid;
    grid-template-columns: 1fr 30px;
    margin-top: 5px;
    transition: all 0.5s;
  }
  .tag_title {
    padding: 15px;
    font-size: 1.2rem;
    font-weight: 900;
  }
  .tag_isActive {
    width: 100%;
    margin: 0;
    border-radius: 2px;
    background-color: ${color.blue};
    color: ${color.white};
    transition: all 1s;
    text-shadow: ${color.textShadowDark};
  }
  .icon_active_tag {
    display: flex;
    align-self: center;
    color: ${color.orange};
    font-weight: 900;
    font-size: 1.5rem;
    transition: 0.3s ease-in;
  }
  .close_tag {
    display: none;
    transition: all 1s;
  }
  .open_tag {
    display: block;
    animation: ${fadieIn} 1s;
  }
  article {
    padding: 10px 15px;
  }
  article > p {
    padding: 10px 0 0 10px;
  }
  .line {
    width: 50%;
    height: 2px;
    margin: 40px auto;
    text-align: center;
    background: ${color.white};
    background: ${color.lineColor};
  }
  .title_experience_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: ${color.navyBlue};
  }
  .title_experience_wrapper > div {
    width: 100%;
    margin-right: 10px;
    border-bottom-right-radius: 20px;
    border-bottom: 2px solid ${color.orange};
  }
  .title_experience {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${color.blueGreenText};
    text-shadow: ${color.textShadowWhite};
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
  margin: 16px 0;
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
              <p>{checked ? "Competent." : "Kompetentny."}</p>{" "}
              <p>{checked ? "Adaptive." : "Adaptacyjny."}</p>{" "}
              <p>{checked ? "Result..." : "Rezultat..."}</p>
            </div>
            <div className="img_wrapper">
              <Image roundedCircle className="img_size" src={me} />
            </div>
          </div>
          {questionsTags}
          <section>
            <div className="line"></div>
            <div className="title_experience_wrapper">
              <div>
                <h3 className="title_experience">
                  {checked ? "Skills" : "Umiejętności"}
                </h3>
              </div>
            </div>
            <Span className="languageIcons">{programingIcons}</Span>
          </section>
        </div>
      </Style>
    );
  }
}

export default About;
