import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 25px;
`;
const H2 = styled.h2`
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 700;
  text-align: center;
`;
const HomeContent = ({ h2, p_en, p_pl, img, checked }) => (
  <Div>
    <H2>{h2}</H2>
    <p>{checked ? p_en : p_pl}</p>
    <Image src={img} fluid rounded />
  </Div>
);

export default HomeContent;
