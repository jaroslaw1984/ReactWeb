import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = props => {
  const listItems = props.items.map(item => <Item key={item.id} {...item} />);
  return <Ul>{listItems}</Ul>;
};

export default Wrapper;
