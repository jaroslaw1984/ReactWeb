import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const Ul = styled.ul`
  width: 80vw;
  margin: 0 auto;
`;
const Wrapper = () => (
  <Ul>
    <Item />
    <Item />
    <Item />
  </Ul>
);

export default Wrapper;
