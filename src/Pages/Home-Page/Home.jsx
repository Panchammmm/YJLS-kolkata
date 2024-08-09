import React from "react";
import "./home.css";

import background from "../../assets/site-bg1.jpg";

import Hero from "./Hero-Section/Hero";

const Home = () => {
  return (
    <>
      <img class="bg-style" src={background} alt="Background Image" />
      <Hero />
    </>
  );
};

export default Home;