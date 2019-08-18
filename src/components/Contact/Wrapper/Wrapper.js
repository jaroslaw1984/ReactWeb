import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 20px;
`;
const Ul = styled.ul`
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = props => {
  const listItems = props.items.map(item => <Item key={item.id} {...item} />);
  return (
    <Div id="start">
      <Ul>{listItems}</Ul>
    </Div>
  );
};

export default Wrapper;
