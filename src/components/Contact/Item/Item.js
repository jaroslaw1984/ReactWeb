import React from "react";
import { Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const defaultImg = "http://unsplash.it/150/150";

const fadeIn = () => keyframes`
  0% {
    opacity: 0;
    top: 30px;
  }
  100% {
    opacity: 1;
    top: 0;
  }

`;
const Li = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  animation: ${fadeIn} 0.5s ease;
  @media screen and (min-width: 768px) {
    padding: 40px 30px;
    flex-wrap: nowrap;
  }
  .imgStyle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    align-self: center;
    background: lightgray no-repeat;
    background-size: cover;
    @media screen and (min-width: ${size.resolutionSm}) {
      width: 200px;
      height: 200px;
    }
  }
  .imgNone {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    align-self: center;
    background: url(${defaultImg}) no-repeat;
    background-size: cover;
  }
  .buttonActive {
    width: 180px;
    margin-bottom: 25px;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.BtnLinkSm};
    }
  }
  .buttonDisable {
    display: none;
  }
`;

const H2 = styled.h2`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  color: ${color.light_blue};
  font-weight: 700;
  font-size: ${size.IH2Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.IH2Sm};
  }
`;

const H6 = styled.h6`
  width: 100%;
  text-align: center;
  color: ${color.blue};
  font-size: ${size.IH6Xs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.IH6Sm};
  }
`;
const P = styled.p`
  width: 100%;
  margin-top: 10px;
  font-weight: 400;
  font-size: ${size.IPXs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.PSm};
  }
`;

const Item = ({
  name,
  image,
  email,
  description_en,
  description_pl,
  link,
  checked
}) => {
  const defaultDescription_en =
    "This description is default because the field message was empty";
  const defaultDescription_pl =
    "Ten opis jest domyślny, ponieważ pole wiadomości było puste";
  const buttonLink = () => {
    if (link.indexOf("https://www.facebook.com/") !== -1) return "Facebook";
    else if (link.indexOf("https://twitter.com/") !== -1) return "Twitter";
  };
  const ImgTag = image ? "img" : "div";
  return (
    <Li>
      <ImgTag src={image} className={image ? "imgStyle" : "imgNone"} />
      <H2>{name}</H2>
      <H6>{email}</H6>
      <P>
        {checked
          ? description_en || defaultDescription_en
          : description_pl || defaultDescription_pl}
      </P>
      <Button
        className={link.length === 0 ? "buttonDisable" : "buttonActive"}
        href={link}
        target="_blank"
        variant="outline-primary"
        rel="noopener noreferrer"
      >
        {buttonLink()}
      </Button>
    </Li>
  );
};

export default Item;
