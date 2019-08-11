import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";
import { dataContact } from "../../../data/data";

const Ul = styled.ul`
  width: 80vw;
  margin: 0 auto;
`;
const Wrapper = () => (
  <Ul>
    <Item
      name={dataContact[0].name}
      image={dataContact[0].image}
      description_en={dataContact[0].description_en}
      facebookLink={dataContact[0].facebookLink}
    />
  </Ul>
);

export default Wrapper;
