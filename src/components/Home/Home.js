import React from "react";
import data from "../../data/data";
import HomeContent from "./HomeContent/HomeContent";

const Home = () => {
  const home = data.homeContent.map(item => (
    <HomeContent key={item.key} {...item} />
  ));

  return <div id="start">{home}</div>;
};

export default Home;
