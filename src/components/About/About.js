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
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    background-color: #3d4a5b;
    margin-bottom: 30px;
  }
  .img_wrapper {
    align-self: flex-start;
    position: relative;
    background-color: #b36117;
  }
  .img_size {
    /* padding: 5px; */
    margin-left: 15px;
    width: 180px;
    height: 180px;
  }
  .animation_wrapper {
    width: 100%;
    z-index: 3;
  }
  .square {
    width: 100%;
    background-color: #b36117;
    display: block;
    z-index: 0;
  }
  .wrapper_tag {
    display: grid;
    grid-template-columns: 1fr;
    transition: all 0.2s;
    /* padding: 0 15px; */
  }
  .title_wrapper {
    display: grid;
    grid-template-columns: 1fr 30px;
    margin-top: 5px;
    transition: all 0.5s;
  }
  .title_isActive {
    width: 100%;
    margin: 0;
    border-radius: 2px;
    background-color: #4b5e99;
    color: #ffff;
    transition: all 1s;
  }
  .tag_title {
    padding: 15px;
    font-size: 1.2rem;
    font-weight: 900;
  }
  .icon_active {
    display: flex;
    align-self: center;
    color: #ed9265;
    font-weight: 900;
    font-size: 1.5rem;
    transition: 0.3s ease-in;
  }
  .close {
    display: none;
    transition: all 1s;
  }
  .open {
    display: block;
    animation: ${fadieIn} 1s;
  }
  article {
    padding: 10px 15px;
  }
  article > p {
    margin: 10px 0;
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
            <div className="animation_wrapper">Anicmacja</div>
            <div className="square">
              <div className="img_wrapper">
                <Image className="img_size" src={me} />
              </div>
            </div>
          </div>
          {questionsTags}
          <div className="description">
            <section>
              <h3>Doświadczenie</h3>
            </section>
          </div>
        </div>
      </Style>
    );
  }
}

export default About;
