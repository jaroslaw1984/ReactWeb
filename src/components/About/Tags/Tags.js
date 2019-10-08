import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const fadieIn = () => keyframes`
    from {
      transform: translateY(-30px)
    }
    to {
      transform: translateY(0)
    }
`;

const Style = styled.div`
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
    @media screen and (min-width: ${size.resolutionMd}) {
      grid-template-columns: 1fr 50px;
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      grid-template-columns: 0.8fr 50px;
      justify-content: center;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      grid-template-columns: 0.8fr 50px;
      justify-content: center;
    }
  }
  .tag_isActive {
    width: 100%;
    margin: 0;
    border-radius: 2px;
    background-color: ${color.blue};
    color: ${color.white};
    transition: all 1s;
  }
  .icon_active_tag {
    display: flex;
    align-self: center;
    color: ${color.orange};
    font-weight: 900;
    font-size: 1.5rem;
    transition: 0.3s ease-in;
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.IconActiveTag};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.IconActiveTagDesk};
    }
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
    @media screen and (min-width: ${size.resolutionDesk}) {
      margin: 0 auto;
      padding: 10px 120px;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      margin: 0 auto;
      padding: 10px 250px;
    }
  }
`;

const H3 = styled.h3`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 900;
  font-size: ${size.TH3Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.TH3Sm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.TH3Md};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.TH3Desk};
  }
`;
const P = styled.p`
  font-size: ${size.PXs};
  line-height: ${size.lineHeight};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.PSm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.PMd};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.PDesk};
  }
`;

class Tags extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <Style>
        <section className="wrapper_tag" onClick={this.handleClick}>
          <div
            className={
              this.props.isActive
                ? "title_wrapper tag_isActive"
                : "title_wrapper"
            }
          >
            <H3>
              {this.props.checked ? this.props.title_en : this.props.title_pl}
            </H3>
            <div className="icon_active_tag">
              {this.props.isActive ? "-" : "+"}
            </div>
          </div>
          <article className={this.props.isActive ? "open_tag" : "close_tag"}>
            <P>
              {this.props.checked
                ? this.props.description_en
                : this.props.description_pl}
            </P>
          </article>
        </section>
      </Style>
    );
  }
}

export default Tags;
