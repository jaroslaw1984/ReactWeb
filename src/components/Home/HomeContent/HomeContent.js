import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import size from "../../../Fonts/Fonts";

const Div = styled.div`
  max-width: 100%;
  display: grid;
  .languageIcons {
    grid-row-start: 4;
  }
  .imgMargin {
    width: 100%;
    margin: 10px auto 30px;
    @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
      width: 90%;
    }
    @media screen and (max-width: ${size.resolutionLLands}) and (orientation: landscape) {
      width: 90%;
    }
    &:nth-last-child(2) {
      width: 30%;
      @media screen and (min-width: ${size.resolutionMd}) {
        width: 20%;
      }
      @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
        width: 20%;
      }
      @media screen and (max-width: ${size.resolutionLLands}) and (orientation: landscape) {
        width: 25%;
      }
    }
  }
`;
const H2 = styled.h2`
  padding: 0 15px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  font-size: ${size.H2Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.H2Sm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.H2Md};
  }
`;
const P = styled.p`
  padding: 0 15px;
  margin: 30px 20px;
  font-size: ${size.PXs};
  line-height: ${size.lineHeight};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.PSm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.PMd};
  }
  @media screen and (min-width: ${size.resolutionL}) {
    line-height: ${size.lineHeightXs};
  }
  @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
    line-height: ${size.lineHeightLandscape};
  }
  @media only screen and (max-width: ${size.resolutionLLands}) and (orientation: landscape) {
    line-height: ${size.lineHeightLandscape};
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
  @media screen and (min-width: 533px) and (orientation: landscape) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
`;

const HomeContent = ({
  h2_en,
  h2_pl,
  text1_en,
  text1_pl,
  text2_en,
  text2_pl,
  img,
  checked,
  icons
}) => {
  const programingIcons = [...icons].map(icon => (
    <Img key={icon.id} src={icon.img} alt={icon.name} title={icon.name} />
  ));
  return (
    <Div>
      <H2>{checked ? h2_en : h2_pl}</H2>
      {img === "" ? null : <Image src={img} fluid className="imgMargin" />}
      <P>{checked ? text1_en : text1_pl}</P>
      {icons === "" ? null : (
        <Span className="languageIcons">{programingIcons}</Span>
      )}
      {text2_en === "" ? null : <P>{checked ? text2_en : text2_pl}</P>}
    </Div>
  );
};

export default HomeContent;
