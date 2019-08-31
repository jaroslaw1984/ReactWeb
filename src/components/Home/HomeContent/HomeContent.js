import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 25px;
  .codeFrame {
    font-size: 10px;
    width: 100%;
    min-height: 5vh;
    line-height: 5vh;
    background-color: rgb(40, 44, 52);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    text-align: left;
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
    margin-left: 1em;
  }
  li {
    counter-increment: li;
    margin-left: 10px;
  }
`;
const H2 = styled.h2`
  padding: 10px;
  margin-bottom: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 700;
  text-align: center;
`;
const P = styled.p`
  margin-top: 16px;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
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

  return (
    <Div>
      <H2>{checked ? h2_en : h2_pl}</H2>
      {img === "" ? null : <Image src={img} fluid rounded />}
      <P>{checked ? text1_en : text1_pl}</P>
      {icons === "" ? null : (
        <span>
          <Img src={icons} alt="icons" />
        </span>
      )}
      {codeExample === "" ? null : (
        <div className="codeFrame">
          <p>{checked ? "Example of code:" : "Przykład kodu:"}</p>
          <ol>{items}</ol>
        </div>
      )}
      {text2_en === "" ? null : <p>{checked ? text2_en : text2_pl}</p>}
    </Div>
  );
};

export default HomeContent;
