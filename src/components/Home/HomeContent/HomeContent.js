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
    margin: 20px auto 0;
  }
`;
const H2 = styled.h2`
  padding: 0 15px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  font-size: ${size.H2Xs};
  @media screen and (min-width: 414px) {
    font-size: ${size.H2Sm};
  }
`;
const P = styled.p`
  padding: 0 15px;
  margin: 30px 20px;
  font-size: ${size.PXs};
  @media screen and (min-width: 414px) {
    font-size: ${size.PSm};
  }
`;

const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 0 15px 0;
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
