import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import size from "../../../Fonts/Fonts";
import colors from "../../../Colors/Colors";

const Div = styled.div`
  max-width: 100%;
  display: grid;
  .languageIcons {
    grid-row-start: 4;
  }
  .contents {
    display: grid;
    justify-content: center;
    @media screen and (min-width: ${size.resolutionDeskL}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 50px 15px 40px;
      align-items: center;
    }
  }

  .cell-0,
  .cell-1,
  .cell-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    .cell-0,
    .cell-2 {
      grid-row-start: 1;
      grid-column-start: 2;
    }
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    p:nth-child(4) {
      background-color: ${colors.white};
      padding: 0 0 50px;
    }
  }
  .imgMargin {
    width: 100%;
    margin: 30px 0 30px;
    @media screen and (min-width: ${size.resolutionMd}) {
      width: 90%;
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      width: 70%;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      width: 80%;
    }
    @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
      width: 90%;
    }
  }
`;
const H2 = styled.h2`
  padding: 0 15px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  font-size: ${size.H2Xs};
  margin-top: 40px;
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
    text-align: center;
  }
`;
const P = styled.p`
  padding: 0 15px;
  /* margin: 30px 20px; */
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
    padding: 50px;
    margin: 0 100px;
    background-color: ${colors.light_green};
    border-radius: 1rem;
  }
`;

const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 0 15px 0;
  @media screen and (min-width: ${size.resolutionMd}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 533px) and (orientation: landscape) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
`;

class HomeContent extends Component {
  state = {
    number: 0
  };

  componentDidMount() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    const {
      h2_en,
      h2_pl,
      text1_en,
      text1_pl,
      text2_en,
      text2_pl,
      img,
      checked,
      icons,
      class_name
    } = this.props;
    const programingIcons = [...icons].map(icon => (
      <Img key={icon.id} src={icon.img} alt={icon.name} title={icon.name} />
    ));
    return (
      <Div>
        <H2>{checked ? h2_en : h2_pl}</H2>
        <div className="contents">
          <div className={class_name}>
            {img === "" ? null : (
              <Image src={img} fluid rounded className="imgMargin" />
            )}
          </div>
          <div className="call-2">
            <P>{checked ? text1_en : text1_pl}</P>
          </div>
        </div>
        {icons === "" ? null : (
          <Span className="languageIcons">{programingIcons}</Span>
        )}
        {text2_en === "" ? null : <P>{checked ? text2_en : text2_pl}</P>}
      </Div>
    );
  }
}
export default HomeContent;
