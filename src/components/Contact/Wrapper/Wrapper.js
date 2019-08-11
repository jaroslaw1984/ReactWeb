import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";
import { data } from "../../../data/data";

const Ul = styled.ul`
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = () => {
  const listItems = data.contact.map(item => <Item key={item.id} {...item} />);
  return <Ul>{listItems}</Ul>;
};

export default Wrapper;
