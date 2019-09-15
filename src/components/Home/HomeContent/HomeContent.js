import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  margin-bottom: 25px;
  .languageIcons {
    grid-row-start: 2;
  }
  .codeFrame {
    grid-row-start: 4;
    font-size: 10px;
    margin: 0 15px;
    min-height: 5vh;
    line-height: 5vh;
    background-color: rgb(40, 44, 52);
    color: rgb(255, 255, 255);
    border-radius: 10px;
  }
  .codeFrame p {
    width: 100px;
    margin-left: 10px;
    border-bottom: 1px solid #fff;
  }
  ol {
    list-style: none;
    counter-reset: li;
    color: greenyellow;
  }

  li::before {
    content: counter(li) ".";
    color: rgb(255, 255, 255);
    display: inline-block;
    width: 3em;
  }
  li {
    counter-increment: li;
    margin-left: 10px;
  }
`;
const H2 = styled.h2`
  padding: 10px;
  margin-bottom: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 700;
  text-align: center;
`;
const P = styled.p`
  padding: 0 15px;
  margin-top: 20px;
`;

const Span = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 15px 15px;
  margin-bottom: 16px;
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
  codeExample,
  icons
}) => {
  const items = [...codeExample].map((item, index) => (
    <li key={index}>{item.code}</li>
  ));
  const programingIcons = [...icons].map(icon => (
    <Img key={icon.id} src={icon.img} alt={icon.name} title={icon.name} />
  ));
  return (
    <Div>
      <H2>{checked ? h2_en : h2_pl}</H2>
      {img === "" ? null : <Image src={img} fluid rounded />}
      <P>{checked ? text1_en : text1_pl}</P>
      {icons === "" ? null : (
        <Span className="languageIcons">{programingIcons}</Span>
      )}
      {text2_en === "" ? null : <P>{checked ? text2_en : text2_pl}</P>}
      {codeExample === "" ? null : (
        <div className="codeFrame">
          <p>{checked ? "Code example:" : "Przykład kodu:"}</p>
          <ol>{items}</ol>
        </div>
      )}
    </Div>
  );
};

export default HomeContent;
