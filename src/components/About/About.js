import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import me from "../../images/mini_me.jpg";
import data from "../../data/data";
import Tags from "./Tags/Tags";

const fadieIn = () => keyframes`
    from {
      transform: translateY(-30px)
    }
    to {
      transform: translateY(0)
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
    background-color: #001628;
  }
  .img_wrapper {
    display: flex;
    height: 80%;
    margin-right: 15px;
    justify-content: center;
    border-bottom-right-radius: 20px;
    border-bottom: 2px solid #ed9265;
  }
  .img_size {
    width: 120px;
    height: 120px;
  }
  .tags_header_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    color: #72e0d1;
    border-bottom-left-radius: 20px;
    border-left: 2px solid #ed9265;
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
    background-color: #35658c;
    color: #ffff;
    transition: all 1s;
  }
  .icon_active_tag {
    display: flex;
    align-self: center;
    color: #ed9265;
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
    margin: 10px 0;
  }
  .line {
    width: 50%;
    height: 2px;
    margin: 40px auto;
    text-align: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
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
          <div className="description">
            <section>
              <div className="line"></div>
              <h3>Doświadczenie</h3>
            </section>
          </div>
        </div>
      </Style>
    );
  }
}

export default About;
